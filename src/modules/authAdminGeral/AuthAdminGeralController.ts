import { Request, Response } from "express";
import { AuthAdminGeralUseCase } from "./AuthAdminGeralUseCase";

export class AuthAdminGeralController {
    constructor(private authAdminGeralUseCase: AuthAdminGeralUseCase) {}
    
    async handle (req: Request, res: Response){
        const { email, senha } = req.body

        const session = await this.authAdminGeralUseCase.execute({ email, senha });

        if(session instanceof Error) {
            return res.status(400).json(session.message);
        }

        return res.status(200).json({ status: "true", message: "user logged", token: session.token, user: session.user });

    }
}