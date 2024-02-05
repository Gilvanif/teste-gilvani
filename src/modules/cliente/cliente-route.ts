import { Router } from "express";
import { clienteServiceCreate } from "./cliente-service";

const clienteRouter = Router();

clienteRouter.post("/", async function (req, res) {
  const clienteInfo = await clienteServiceCreate(req);
  res.status(200).send(clienteInfo);
});
