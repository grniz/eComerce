import mongoose from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2";


const productsCollection = "products"


const productSchema = mongoose.Schema({
    title:{
        type: String,
        required : true,
    },
    description:{
        type: String,
        required: true,
    },
    price:{
        type: Number,
        required: true,
    },
    status:{
        type: Boolean,
        required: true,
        default: true,
    },
    thumbnails: String,
    code:{
        type: String,
        required: true,
        unitque: true,
    },
    stock:{
        type: Number,
        required:true,
    },
    category:{
        type: String,
        required: true,
    },
});

productSchema.plugin(mongoosePaginate);
const productsModel = mongoose.model(productsCollection, productSchema);

export default productsModel;