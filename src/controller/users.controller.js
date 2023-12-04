import { USERDAO } from "../dao/index.js"

const getAllUsers = async(req,res)=>{
    const users = await USERDAO.getAll();
    res.send({status:"success",payload:users})
}

const getUser = async(req,res)=> {
    const userId = req.params.uid;
    const user = await USERDAO.getUser(userId);
    if(!user) return res.status(404).send({status:"error",error:"User not found"})
    res.send({status:"success",payload:user})
}

const createUser = async(req,res)=>{
    const newUser = req.body;
    const result = await USERDAO.createUser(newUser);
    res.send({status: "success", message:"usuario creado"});
}

const updateUser =async(req,res)=>{
    const updateBody = req.body;
    const userId = req.params.uid;
    const user = await USERDAO.updateUser(userId);
    if(!user) return res.status(404).send({status:"error", error:"User not found"})
    const result = await USERDAO.update(userId,updateBody);
    res.send({status:"success",message:"User updated"})
}

const deleteUser = async (req, res) => {
    const userId = req.params.uid;
    const user = await USERDAO.delete(userId);
    if (!user) {
        return res.status(404).send({ status: "error", error: "User not found" });
    }

    const result = await USERDAO.delete(userId);
    res.send({ status: "success", message: "User deleted" });
};


export {
    deleteUser,
    getAllUsers,
    createUser,
    getUser,
    updateUser
}