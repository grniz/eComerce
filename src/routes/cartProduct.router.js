import { Router } from "express";
import { createCartProduct, updateCartProduct } from "../controller/cartproduct.controller.js"

const router = Router();

router.post("/", createCartProduct);
router.put("/", updateCartProduct);

export default router;
