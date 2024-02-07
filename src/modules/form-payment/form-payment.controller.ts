import { Router } from "express";
import {
  formPaymentServiceCreate,
  formPaymentServiceDelete,
  formPaymentServiceGet,
  formPaymentServiceGetAll,
  formPaymentServiceUpdate,
} from "./form-payment.service";
import auth from "../../middleware/auth";

const formPaymentController = Router();

formPaymentController.post("/", auth, async function (req, res) {
  const result = await formPaymentServiceCreate(req.body);
  if (result instanceof Error) {
    res.status(500).json(result);
  }
  res.status(200).json(result);
});

formPaymentController.get("/", async (req, res) => {
  const result = await formPaymentServiceGet(req.body.id);
  if (result instanceof Error) {
    res.status(500).json(result);
  }
  res.status(200).json(result);
});

formPaymentController.get("/all", async (req, res) => {
  const result = await formPaymentServiceGetAll();
  if (result instanceof Error) {
    res.status(500).json(result);
  }
  res.status(200).json(result);
});

formPaymentController.patch("/", async (req, res) => {
  const result = await formPaymentServiceUpdate(req.body);
  if (result instanceof Error) {
    res.status(500).json(result);
  }
  res.status(200).json(result);
});

formPaymentController.delete("/", async (req, res) => {
  const result = await formPaymentServiceDelete(req.body.id);
  if (result instanceof Error) {
    res.status(500).json(result);
  }
  res.status(200).json(result);
});

export default formPaymentController;
