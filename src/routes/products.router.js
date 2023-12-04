import { Router } from "express";
import { 
    getProduct,
    getProductById,
    createProduct,
    update,
    deleteProduct } from "../controller/product.controller.js"

const router = Router();

router.get("/", getProduct );
router.get("/:pid", getProductById );
router.post("/", createProduct);
router.put("/:pid", update);
router.delete("/:pid", deleteProduct);

export default router;
