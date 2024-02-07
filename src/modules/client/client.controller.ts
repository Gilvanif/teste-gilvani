import { Router } from "express";
import { clientServiceCreate } from "./client.service";
import auth from "../../middleware/auth";

const clienteController = Router();

clienteController.post("/", async (req, res) => {
  const result = await clientServiceCreate(req.body);
  if (result instanceof Error) {
    res.status(500).send(result);
  }
  res.status(200).send(result);
});

export default clienteController;
