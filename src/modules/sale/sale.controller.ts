import { Router } from "express";
import {
  saleServiceCreate,
  saleServiceDelete,
  saleServiceGet,
  saleServiceGetAll,
  saleServiceUpdate,
} from "./sale.service";
import auth from "../../middleware/auth";

const saleController = Router();

saleController.post("/", async (req, res) => {
  const result = await saleServiceCreate(req.body);
  if (result instanceof Error) {
    res.status(500).send(result);
  }
  res.status(200).send(result);
});

saleController.get("/", async (req, res) => {
  const result = await saleServiceGet(req.body.id);
  if (result instanceof Error) {
    res.status(500).json(result);
  }
  res.status(200).json(result);
});

saleController.get("/all", async (req, res) => {
  const result = await saleServiceGetAll();
  if (result instanceof Error) {
    res.status(500).json(result);
  }
  res.status(200).json(result);
});

saleController.patch("/", async (req, res) => {
  const result = await saleServiceUpdate(req.body);
  if (result instanceof Error) {
    res.status(500).json(result);
  }
  res.status(200).json(result);
});

saleController.delete("/", async (req, res) => {
  const result = await saleServiceDelete(req.body.id);
  if (result instanceof Error) {
    res.status(500).json(result);
  }
  res.status(200).json(result);
});

export default saleController;
