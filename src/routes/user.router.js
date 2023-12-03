import { Router } from "express";
import {Contact} from "../dao/factory.js";
import ContactDTO from "../dao/DTO/contact.js";

// costum error imports
import costumError from "../service/errors/costumError.js"
import EErros from "../service/errors/enum.js";
import { generateUserErrorInfo } from "../service/errors/info.js";

const contacts = new Contact();
const router = Router();

router.get("/", async (req,res) => {
    let result = await contacts.get();
    res.send({estatus: "ok", payload:result});
});

router.post("/", async (req,res) => {
    if(!first_name || !last_name || !email || !birthdate || !phone){
        costumError.createError({
            name: "userError",
            cause: generateUserErrorInfo({
                first_name,
                last_name,
                email,
                birthdate,
                phone
            }),
            message: "Error trying to create a user",
            code: EErros.INVALID_TYPES_ERROR
        });        
    }
    const {
        first_name,
        last_name,
        email,
        birthdate,
        phone
    } = req.body;
    let contact = new ContactDTO({
        first_name,
        last_name,
        email,
        birthdate,
        phone
    })
    let result = await contacts.create(contact);
    res.json(result);
});

router.put("/:id", async (req,res) => {    
    const {
        first_name,
        last_name,
        email,
        birthdate,
        phone
    } = req.body;
    let contact = {first_name, last_name, email, birthdate, phone};
    const {id} = req.params;

    let result = await contacts.modify(id, contact);
    res.json(result);
});

router.delete("/:id", async (req,res) => {
    const {id} = req.params;
    let result = await contacts.delete(id);
    res.json(result);
});

export default router;