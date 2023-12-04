import { PRODUCTDAO } from "../dao/index.js";

async function findProducts(req, res) {
  const products = await PRODUCTDAO.findProducts();
  res.send(products);
}

async function findProductById(req, res) {
  const id = req.params.id; 
  const product = await PRODUCTDAO.findProductById(id);
  res.send(product);
}

async function createProduct(req, res) {
  const product = req.body;
  await PRODUCTDAO.createProduct(product);
  res.send(product);
}

async function update(req, res) {
  const product = req.body;
  await PRODUCTDAO.update(product);
  res.send(product);
}

async function deleteProduct(req, res) {
  const product = req.body;
  await PRODUCTDAO.deleteProduct(product);
  res.send(product);
}

export { findProducts, findProductById, createProduct, update, deleteProduct };



