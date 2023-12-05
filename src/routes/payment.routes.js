import express from 'express';
import { purchaseCart } from '../controller/payment.controller.js';

const router = express.Router();

// Cambia la ruta para reflejar que estás comprando un carrito
router.post('/payment/purchase/:cartId', purchaseCart);

export default router;
