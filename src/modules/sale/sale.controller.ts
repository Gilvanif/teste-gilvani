import { Router } from "express";
import { saleServiceCreate } from "./sale.service";
import auth from "../../middleware/auth";

const saleController = Router();

saleController.post("/", auth, async (req, res) => {
  const result = await saleServiceCreate(req.body);
  if (result instanceof Error) {
    res.status(500).send(result);
  }
  res.status(200).send(result);
});

export default saleController;
