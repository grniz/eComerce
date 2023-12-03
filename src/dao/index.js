import memoryProductDao from "../dao/memory/products.dao.js";
import memoryCartDao from "../dao/memory/carts.dao.js";

import mongoProductDao from "../dao/mongo/products.dao.js";
import mongoCartDao from "../dao/mongo/carts.dao.js";
import mongoCartProductDao from "../dao/mongo/cartProduct.dao.js";
import mongoUserDao from "../dao/mongo/contact.mongo.js";

import { PERSISTENCE } from "../config/config.js";


export const PRODUCTDAO = PERSISTENCE === "MONGO" ? new mongoProductDao() : new memoryProductDao();
export const CARTDAO = PERSISTENCE === "MONGO" ? new mongoCartDao() : new memoryCartDao();
export const CARTPRODUCTDAO = new mongoCartProductDao();
export const USERDAO = new mongoUserDao();

