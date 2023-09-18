import mongoose from "mongoose";

const cartProductCollections = "cartProduct"

const cartProductSchema = new mongoose.Schema({
    id:{
        type: String,
        required: true,
    },
    quantity:{
        type: Number,
        required: true,
    },
});

const cartProductModel = mongoose.model(cartProductCollections, cartProductSchema);

export default cartProductModel;