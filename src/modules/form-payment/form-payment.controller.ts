import { Router } from "express";
import { formPaymentServiceCreate } from "./form-payment.service";
import auth from "../../middleware/auth";

const formPaymentController = Router();

formPaymentController.post("/", auth, async function (req, res) {
  const result = await formPaymentServiceCreate(req.body);
  if (result instanceof Error) {
    res.status(500).send(result);
  }
  res.status(200).send(result);
});

export default formPaymentController;
