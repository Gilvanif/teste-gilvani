import { Router } from "express";
import { userServiceCreate } from "./user.service";
import auth from "../../middleware/auth";

const userController = Router();

userController.post("/", auth, async (req, res) => {
  const clienteInfo = await userServiceCreate("req");
  res.status(200).send(clienteInfo);
});

export default userController;
