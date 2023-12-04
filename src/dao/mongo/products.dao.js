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
    
    async getBy(params){
        let response = await productsModel.findOne(params).lean();
        return response;
    }

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
