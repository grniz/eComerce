
import { Router } from "express"
import {
    deleteUser,
    getAllUsers,
    createUser,
    getUser,
    updateUser } from "../controller/users.controller.js"

const router = Router()

router.get("/", getAllUsers);
router.get("/:uid", getUser)
router.post("/", createUser);
router.put("/:uid", updateUser);
router.delete("/:uid", deleteUser);

export default router;