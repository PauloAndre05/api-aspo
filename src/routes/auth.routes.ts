import { Router } from "express";
import { AuthController } from "../modules/auth/AuthController";
import { AuthUseCase } from "../modules/auth/AuthUseCase";


export const authRouter = Router()

const authUseCase = new AuthUseCase();
const authController = new AuthController(authUseCase);

authRouter.post("/auth", (req, res) => {
    return authController.handle(req, res)
})