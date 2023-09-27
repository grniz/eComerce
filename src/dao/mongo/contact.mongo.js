import contactModel from "./models/users.model.js";

export default class Contacts {
    constructor(){

    }
    get = async () => {
        let contacts = await contactModel.find();
        return contacts;
    }
    create = async (contacto)=>{
        let result = await contactModel.create(contacto);
        return contacto
    }
    modify = async (id, contacto)=>{
        let result = await contactModel.findByIdAndUpdate(id, contacto, {new: true});
        return result;
    }
    delete = async (id, contacto)=>{
        let result = await contactModel.findByIdAndDelete(id);
        return result;
    }

}