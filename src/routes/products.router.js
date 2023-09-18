import { Router } from "express";
import { 
    findProducts,
    findProductById,
    createProduct,
    update,
    deleteProduct } from "../controller/product.controller.js"

const router = Router();

router.get("/", findProducts );
router.get("/:pid", findProductById );
router.post("/", createProduct);
router.put("/", update);
router.delete("/", deleteProduct);

export default router;
