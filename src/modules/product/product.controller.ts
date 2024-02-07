import { Router } from "express";
import { productServiceCreate } from "./product.service";
import auth from "../../middleware/auth";

const productController = Router();

productController.post("/", auth, async function (req, res) {
  const clienteInfo = await productServiceCreate("req");
  res.status(200).send(clienteInfo);
});

export default productController;
