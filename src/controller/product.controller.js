import { PRODUCTDAO } from "../dao/index.js";

async function getProduct(req, res) {
  const products = await PRODUCTDAO.getProduct();
  res.send(products);
}

async function getProductById(req, res) {
  const id = req.params.id; 
  const product = await PRODUCTDAO.getProductById(id);
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

export { getProduct, getProductById, createProduct, update, deleteProduct };



