import productsModel from "../mongo/models/products.model.js";

export default class Products {

    async getProduct() {
        try {
            let response = await productsModel.find().lean();
            return response;
        } catch (error) {
            console.error("Error al buscar el producto:", error);
            throw error;
        };
    };
    
    async getProductById(pid) {
        try {
            let response = await productsModel.findOne(pid);
            console.log("Response:", response); 
            if (!response) {
                return null;
            }
            return response;
        } catch (error) {
            throw new Error(`Error en getProductById: ${error.message}`);
        }
    };

    async createProduct(product) {
        let response = await productsModel.create(product);
        return response;
    }

    async update(id, product) {
        let response = await productsModel.findByIdAndUpdate(id, product);
        return response;
    }

    async deleteProduct(pid) {
        try {
            const product = await productsModel.findById(pid);
            if (!product) {
                throw new Error("Producto no encontrado");
            }
    
            let response = await productsModel.findByIdAndDelete(pid);
            return response;
        } catch (error) {
            throw error;
        }
    }
    
}
