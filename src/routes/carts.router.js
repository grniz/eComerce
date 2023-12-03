import { Router } from "express";
import { 
    findCarts,
    findCartById,
    createCart,
    updateCart,
    deleteCart } from "../controller/carts.controller.js"

const router = Router();

router.get("/", findCarts);
router.get("/:cid", findCartById);
router.post("/", createCart);
router.put("/", updateCart);
router.delete("/", deleteCart);

export default router;


