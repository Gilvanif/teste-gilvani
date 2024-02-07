import { Router } from "express";
import {
  productServiceCreate,
  productServiceDelete,
  productServiceGet,
  productServiceGetAll,
  productServiceUpdate,
} from "./product.service";
import auth from "../../middleware/auth";

const productController = Router();

productController.post("/", async function (req, res) {
  const result = await productServiceCreate(req.body);
  if (result instanceof Error) {
    res.status(500).send(result);
  }
  res.status(200).send(result);
});

productController.get("/", async (req, res) => {
  const result = await productServiceGet(req.body.id);
  if (result instanceof Error) {
    res.status(500).json(result);
  }
  res.status(200).json(result);
});

productController.get("/all", async (req, res) => {
  const result = await productServiceGetAll();
  if (result instanceof Error) {
    res.status(500).json(result);
  }
  res.status(200).json(result);
});

productController.patch("/", async (req, res) => {
  const result = await productServiceUpdate(req.body);
  if (result instanceof Error) {
    res.status(500).json(result);
  }
  res.status(200).json(result);
});

productController.delete("/", async (req, res) => {
  const result = await productServiceDelete(req.body.id);
  if (result instanceof Error) {
    res.status(500).json(result);
  }
  res.status(200).json(result);
});

export default productController;
