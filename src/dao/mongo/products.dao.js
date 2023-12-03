import productsModel from "../mongo/models/products.model.js";

export default class Products {

    async findProducts() {
        let response = await productsModel.find().lean();
        return response;
    }

    async findProductById(id) {
        let response = await productsModel.findById(id).lean();
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

    async deleteProduct(id) {
        let response = await productsModel.findByIdAndDelete(id);
        return response;
    }
}
