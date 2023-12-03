import {CARTPRODUCTDAO} from "../dao/index.js";

async function createCartProduct(req, res) {
    const cartProduct = req.body;
    await CARTPRODUCTDAO.createCartProduct(cartProduct);
    res.send(cartProduct);
  }
  async function updateCartProduct(req, res) {
    const cartProduct = req.body;
    await CARTPRODUCTDAO.updateCartProduct(cartProduct);
    res.send(cartProduct);
  }

export { createCartProduct, updateCartProduct };