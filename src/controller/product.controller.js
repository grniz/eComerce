import { PRODUCTDAO } from "../dao/index.js";

async function getProduct(req, res) {
  const products = await PRODUCTDAO.getProduct();
  res.send({ status: "success", payload: products });
}

async function getProductById(req, res) {
  const pid = req.params.id; 
  const product = await PRODUCTDAO.getBy(pid);
  res.send({ status: "success", payload: pet });
}

async function createProduct(req, res) {
  const product = req.body;
  await PRODUCTDAO.createProduct(product);
  res.send({ status: "success", payload: product });
}

async function update(req, res) {
  const product = req.body;
  await PRODUCTDAO.update(product);
  res.send({ status: "success", message: "product update" });
}

async function deleteProduct(req, res) {
  const product = req.body;
  await PRODUCTDAO.deleteProduct(product);
  res.send({ status: "success", message: "product delete" });
}

export { getProduct, getProductById, createProduct, update, deleteProduct };



