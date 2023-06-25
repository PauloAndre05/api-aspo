import { Router } from "express";
import { AuthAdminGeralUseCase } from "../modules/authAdminGeral/AuthAdminGeralUseCase";
import { AuthAdminGeralController } from "../modules/authAdminGeral/AuthAdminGeralController";

export const authAdminGeralRouter = Router()

const authAdminGeralUseCase = new AuthAdminGeralUseCase()
const authAdminGeralController = new AuthAdminGeralController(authAdminGeralUseCase)

authAdminGeralRouter.post("/auth", (req, res) => {
    return authAdminGeralController.handle(req, res)
} )