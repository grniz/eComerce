import { Router } from "express";
import {generateProduct} from "../utils/mockUtils.js";


const router = Router();

router.get("/", (req,res) =>{
    let products = [];
    for (let x=0; x<=100; x++){
        products.push(generateProduct());
    }
    res.json({
        count:products.length,
        data:products,
    });
});

export default router;