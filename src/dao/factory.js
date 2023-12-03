import {PERSISTENCE} from "../config/config.js";


export let Contact;
switch (PERSISTENCE){
    case "MONGO":
        const {default: ContactMongo} = await import("./mongo/contact.mongo.js");
        Contact = ContactMongo;
        break;
    case "MEMORY":
        const {default: ContactMemory} = await import("./memory/contact.memory.js");
        Contact = ContactMemory;
        break;
};

export let Products
switch (PERSISTENCE){
    case "MONGO":
        const {default: ProductMongo} = await import("./mongo/products.dao.js");
        Products = ProductMongo;
        break;
    case "MEMORY":
        const {default: ProductMemory} = await import("./memory/products.dao.js");
        Products = ProductMemory;
        break;
};

export let Carts
switch (PERSISTENCE){
    case "MONGO":
        const {default: CartsMongo} = await import("./mongo/carts.dao.js");
        Carts = CartsMongo;
        break;
    case "MEMORY":
        const {default: CartsMemory} = await import("./memory/carts.dao.js");
        Carts = CartsMemory;
        break;
};

export let CartProduct;
const {default: CartProductMongo} = await import("./mongo/cartProduct.dao.js");
        CartProduct = CartProductMongo;

