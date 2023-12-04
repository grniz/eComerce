import CartProductDAO from "../dao/index.js";
import stripe from 'stripe';

// Inicializar Stripe con tu clave secreta
const stripeInstance = stripe('tu_clave_secreta_de_stripe');

async function createCartProduct(req, res) {
    const cartProduct = req.body;
    await CartProductDAO.createCartProduct(cartProduct);
    res.send(cartProduct);
}

async function updateCartProduct(req, res) {
    const { id } = req.params; // Obtener el ID del carrito de compras
    const cartProduct = req.body;
    await CartProductDAO.updateCartProduct(id, cartProduct);
    res.send(cartProduct);
}

async function purchaseCart(req, res) {
    const { id } = req.params; // Obtener el ID del carrito de compras
    const cartProducts = await CartProductDAO.getCartProducts(id);

    if (!cartProducts || cartProducts.length === 0) {
        return res.status(404).send({ status: "error", message: "Cart not found or empty" });
    }

    // Calcular el monto total del carrito en centavos
    const amount = calculateTotalAmount(cartProducts);

    try {
        // Crear una sesión de pago con Stripe
        const session = await stripeInstance.checkout.sessions.create({
            payment_method_types: ['card'],
            line_items: generateLineItems(cartProducts),
            mode: 'payment',
            success_url: 'http://localhost:3000/success', // URL de éxito después del pago
            cancel_url: 'http://localhost:3000/cancel',  // URL si se cancela el pago
        });

        // Redireccionar al usuario a la página de pago de Stripe
        res.redirect(303, session.url);
    } catch (error) {
        console.error(error);
        res.status(500).send({ status: "error", message: "Error creating payment session" });
    }
}

function calculateTotalAmount(cartProducts) {
    // Lógica para calcular el monto total del carrito en centavos
    // Puedes sumar los precios de los productos, aplicar descuentos, etc.
    // Este es un ejemplo básico
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

export { createCartProduct, updateCartProduct, purchaseCart };


/*
import cartProductModel from "../mongo/models/cartProducts.model.js";

export default class CartProduct{
    async createCartProduct(cartProduct){
        let result = await cartProductModel.create(cartProduct);
        return result;
    }
    async updateCartProduct(id, product){
        let result = await cartProductModel.updateOne(id, product);
        return result;
    }
}
*/