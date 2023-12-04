import contactModel from "./models/users.model.js";

export default class Contacts {
    
    // Obtiene todos los contactos de la base de datos.
    getAll = async () => {
        try {
            let contacts = await contactModel.find();
            return contacts;
        } catch (error) {
            console.error(`Error al obtener todos los contactos: ${error.message}`);
            throw new Error("Error al obtener todos los contactos");
        }
    }

    // Obtiene un contacto por su ID.
    getUser = async (id) => {
        try {
            let result = await contactModel.findById(id);
            return result;
        } catch (error) {
            console.error(`Error al obtener el contacto por ID: ${error.message}`);
            throw new Error("Error al obtener el contacto por ID");
        }
    }

     // Crea un nuevo contacto en la base de datos.
    createUser = async (contacto) => {
        try {
            let result = await contactModel.create(contacto);
            return result;
        } catch (error) {
            console.error(`Error al crear un nuevo contacto: ${error.message}`);
            throw new Error("Error al crear un nuevo contacto");
        }
    }

    // Modifica un contacto en la base de datos.
    updateUser = async (id, contacto) => {
        try {
            let result = await contactModel.findByIdAndUpdate(id, contacto, { new: true });
            return result;
        } catch (error) {
            console.error(`Error al modificar el contacto por ID: ${error.message}`);
            throw new Error("Error al modificar el contacto por ID");
        }
    }


    // Elimina un contacto de la base de datos.
    delete = async (id) => {
        try {
            let result = await contactModel.findByIdAndDelete(id);
            return result;
        } catch (error) {
            console.error(`Error al eliminar el contacto por ID: ${error.message}`);
            throw new Error("Error al eliminar el contacto por ID");
        }
    }
}
