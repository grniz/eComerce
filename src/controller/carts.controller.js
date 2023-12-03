import {CARTDAO} from "../dao/index.js";

async function findCarts(req, res) {
    const cart = await CARTDAO.findCarts();
    res.send();
  }
async function findCartById(req, res) {
    const cart = await CARTDAO.findCartById(_id);
    res.send(_id);
  }

async function createCart(req, res) {
    const cart = req.body;
    await CARTDAO.createCart(cart);
    res.send(cart);
  }
async function updateCart(req, res) {
    const cart = req.body;
    await CARTDAO.updateCart(_id);
    res.send(_id);
  }
async function deleteCart(req, res) {
    const cart = req.body;
    await CARTDAO.deleteCart(_id);
    res.send(_id);
  }
export { findCarts, findCartById, createCart, updateCart, deleteCart }