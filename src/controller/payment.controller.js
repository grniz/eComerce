import {CARTPRODUCTDAO} from "../dao/index.js";
import stripe from 'stripe';
import * as dotenv from "dotenv"

dotenv.config();

const PAYMENT_SECRECT_KEY = process.env.PAYMENT_SECRECT_KEY;

const stripeInstance = stripe(PAYMENT_SECRECT_KEY);

async function purchaseCart(req, res) {
    const { id } = req.params;
    const cartProducts = await CARTPRODUCTDAO.getCartProducts(id);
    if (!cartProducts || cartProducts.length === 0) {
        return res.status(404).send({ status: "error", message: "Cart not found or empty" });
    };
    // Calcular el monto total
    const amount = calculateTotalAmount(cartProducts);
    try {
        // Crear una sesión de pago con Stripe
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
    }
}

function calculateTotalAmount(cartProducts) {
    return cartProducts.reduce((total, product) => total + (product.price * product.quantity * 100), 0);
}
function generateLineItems(cartProducts) {
    // Convertir productos en objetos line_items para Stripe
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
}

export { purchaseCart };
