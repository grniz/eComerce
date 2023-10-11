import fs from "fs";
import __dirname from "../../utils/utils.js";

const path = __dirname + "../../data/products.json";

export default class Products {
  findProducts = async () => {
    if (fs.existsSync(path)) {
      try {
        let result = await fs.promises.readFile(path, "utf-8");
        let data = await JSON.parse(result);
        return data;
      } catch (err) {
        console.log("No se pudo leer el archivo: " + err);
      }
    } else {
      return [];
    }
  };
  createProduct = async (product) => {
    try {
      let products = await this.getAll();
      if (products.length === 0) {
        product.id = 1;
        products.push(product);
        await fs.promises.writeFile(path, JSON.stringify(data));
      } else {
        user.id = users[users.length - 1].id + 1;
        await fs.promises.writeFile(path, JSON.stringify(data));
        return products;
      }
    } catch (err) {
      console.log("No se pudo escribir el archivo" + err);
    }
  };
}