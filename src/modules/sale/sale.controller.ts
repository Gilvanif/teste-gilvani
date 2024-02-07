import { Router } from "express";
import { saleServiceCreate } from "./sale.service";
import auth from "../../middleware/auth";

const saleController = Router();

saleController.post("/", auth, async (req, res) => {
  const clienteInfo = await saleServiceCreate("req");
  res.status(200).send(clienteInfo);
});

export default saleController;
