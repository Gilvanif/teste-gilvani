import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

const jwt = {
  secret: process.env.JWT_SECRET ? process.env.JWT_SECRET : "",
};

export default function auth(
  request: Request,
  response: Response,
  next: NextFunction
): Response | void {
  try {
    const auth = request.headers.authorization;
    if (!auth) {
      throw new Error("JWT is missing");
    }
    const [, token] = auth.split(" ");
    const tokenDecoded = verify(token, jwt.secret);
    if (tokenDecoded) {
      return next();
    } else {
      throw new Error("JWT invalid");
    }
  } catch (error) {
    return response.status(400).json({ error: error });
  }
}
