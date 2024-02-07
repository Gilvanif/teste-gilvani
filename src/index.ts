import express from "express";
import cors from "cors";
import clienteController from "./modules/client/client.controller";
import formPaymentController from "./modules/form-payment/form-payment.controller";
import productController from "./modules/product/product.controller";
import saleController from "./modules/sale/sale.controller";

const app = express();
app.use(express.json());

app.use(cors());
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Header",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "PUT, POST, PATH, DELETE, GET");
    return res.status(200).send({});
  }
  next();
});

// const clienteController = require("./modules/client/client.controller");

app.use("/client", clienteController);
app.use("/form-payment", formPaymentController);
app.use("/product", productController);
app.use("/sale", saleController);

app.listen(3043, () => console.log("Listening 3043"));
