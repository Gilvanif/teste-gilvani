import { Router } from "express";
import {
  clientServiceCreate,
  clientServiceDelete,
  clientServiceGet,
  clientServiceGetAll,
  clientServiceUpdate,
} from "./client.service";
import auth from "../../middleware/auth";

const clienteController = Router();

clienteController.post("/", async (req, res) => {
  const result = await clientServiceCreate(req.body);
  if (result instanceof Error) {
    res.status(500).json(result);
  }
  res.status(200).json(result);
});

clienteController.get("/", async (req, res) => {
  const result = await clientServiceGet(req.body.id);
  if (result instanceof Error) {
    res.status(500).json(result);
  }
  res.status(200).json(result);
});

clienteController.get("/all", async (req, res) => {
  const result = await clientServiceGetAll();
  if (result instanceof Error) {
    res.status(500).json(result);
  }
  res.status(200).json(result);
});

clienteController.patch("/", async (req, res) => {
  const result = await clientServiceUpdate(req.body);
  if (result instanceof Error) {
    res.status(500).json(result);
  }
  res.status(200).json(result);
});

clienteController.delete("/", async (req, res) => {
  const result = await clientServiceDelete(req.body.id);
  if (result instanceof Error) {
    res.status(500).json(result);
  }
  res.status(200).json(result);
});

export default clienteController;
