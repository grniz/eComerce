import { Router } from "express";
import Contacts from "../dao/factory.js";
import ContactDTO from "../dao/DTO/contact.js";

const contacts = new Contacts();
const router = Router();

router.get("/", async (req,res) => {
    let result = await contacts.get();
    res.send({estatus: "ok", payload:result});
});

router.post("/", async (req,res) => {
    const {
        first_name,
        last_name,
        email,
        age,
        password
    } = req.body;
    let contact = new ContactDTO({
        first_name,
        last_name,
        email,
        age,
        password
    })
    let result = await contacts.create(contact);
    res.json(result);
});

router.put("/:id", async (req,res) => {
    const {
        first_name,
        last_name,
        email,
        age,
        password
    } = req.body;
    let contact = {first_name, last_name, email, age, password};
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