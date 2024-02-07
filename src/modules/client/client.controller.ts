import { Router } from "express";
import { clientServiceCreate } from "./client.service";
import auth from "../../middleware/auth";

const clienteController = Router();

clienteController.post("/", async (req, res) => {
  const clienteInfo = await clientServiceCreate("req");
  res.status(200).send(clienteInfo);
});

export default clienteController;
