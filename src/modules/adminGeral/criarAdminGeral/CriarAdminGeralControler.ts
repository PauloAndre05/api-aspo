import { Request, Response } from "express";
import { CriarAdminGeralUseCase } from "./CriarAdminGeralUseCase";

export class CriarAdminGeralControler {
    async handle(req: Request, res: Response){
        const { id, nome, email, senha } = req.body
        const administrador = new CriarAdminGeralUseCase()
        const administradorGeral = await administrador.execute({id, nome, email, senha})
        return res.status(200).json(administradorGeral)
    }
}   