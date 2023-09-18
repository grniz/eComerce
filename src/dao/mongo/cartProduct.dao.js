import cartProductModel from "../mongo/models/cartProducts.model.js";

export default class CartProduct{
    async createCartProduct(cartProduct){
        let result = await cartProductModel.create(cartProduct);
        return result;
    }
    async updateCartProduct(id, product){
        let result = await cartProductModel.updateOne(id, product);
        return result;
    }
}