import memoryProductDao from "../dao/memory/products.dao.js";
import memoryCartDao from "../dao/memory/carts.dao.js";

import mongoProductDao from "../dao/mongo/products.dao.js";
import mongoCartDao from "../dao/mongo/carts.dao.js";
import mongoCartProductDao from "../dao/mongo/cartProduct.dao.js";
import mongoUserDao from "../dao/mongo/users.dao.js";

import { PERSISTENCE } from "../config/config.js";


export const PRODUCTDAO = PERSISTENCE ==="MONGO" ? mongoProductDao : memoryProductDao;

export const CARTDAO = PERSISTENCE === "mongo" ? mongoCartDao : memoryCartDao;

export const CARTPRODUCTDAO = mongoCartProductDao;
export const USERDAO = mongoUserDao;
