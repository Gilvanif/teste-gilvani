import { Router } from "express";
import { productServiceCreate } from "./product.service";
import auth from "../../middleware/auth";

const productController = Router();

productController.post("/", auth, async function (req, res) {
  const result = await productServiceCreate(req.body);
  if (result instanceof Error) {
    res.status(500).send(result);
  }
  res.status(200).send(result);
});

export default productController;
