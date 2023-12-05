import { CARTPRODUCTDAO } from "../dao/index.js";
import stripe from 'stripe';
import * as dotenv from "dotenv"

dotenv.config();

const PAYMENT_PUBLIC_KEY = process.env.PAYMENT_PUBLIC_KEY

const stripeInstance = stripe(PAYMENT_PUBLIC_KEY);

async function createCartProduct(req, res) {
    const cartProduct = req.body;
    await CARTPRODUCTDAO.createCartProduct(cartProduct);
    res.send(cartProduct);
}

async function updateCartProduct(req, res) {
    const cartProduct = req.body;
    await CARTPRODUCTDAO.updateCartProduct(cartProduct);
    res.send(cartProduct);
}

async function purchaseCart(req, res) {
    const cartId = req.params.id; 
    const cartProducts = await CARTPRODUCTDAO.getCartProducts(cartId);

    if (!cartProducts || cartProducts.length === 0) {
        return res.status(404).send({ status: "error", message: "Cart not found or empty" });
    }

    const amount = calculateTotalAmount(cartProducts);
    try {
        const session = await stripeInstance.checkout.sessions.create({
            payment_method_types: ['card'],
            line_items: generateLineItems(cartProducts),
            mode: 'payment',
            success_url: 'http://localhost:8080/success',
            cancel_url: 'http://localhost:8080/cancel', 
        });
        res.redirect(303, session.url);
    } catch (error) {
        console.error(error);
        res.status(500).send({ status: "error", message: "Error creating payment session" });
    };
};
function calculateTotalAmount(cartProducts) {
    return cartProducts.reduce((total, product) => total + (product.price * product.quantity * 100), 0);
};

function generateLineItems(cartProducts) {
    return cartProducts.map(product => ({
        price_data: {
            currency: 'usd',
            product_data: {
                name: product.title,
            },
            unit_amount: product.price * 100,
        },
        quantity: product.quantity,
    }));
};

export { createCartProduct, updateCartProduct, purchaseCart };
