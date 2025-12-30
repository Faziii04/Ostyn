import { Router } from "express";

export const userRouter = Router();

userRouter.get("/users", (req, res) => {
  res.send("Get all users");
}); 