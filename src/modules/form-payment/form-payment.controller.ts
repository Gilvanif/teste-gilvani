import { Router } from "express";
import { formPaymentServiceCreate } from "./form-payment.service";
import auth from "../../middleware/auth";

const formPaymentController = Router();

formPaymentController.post("/", auth, async function (req, res) {
  const clienteInfo = await formPaymentServiceCreate("req");
  res.status(200).send(clienteInfo);
});

export default formPaymentController;
