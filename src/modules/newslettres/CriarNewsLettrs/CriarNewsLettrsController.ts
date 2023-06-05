import { Request, Response } from "express";
import { CriarNewsLettrsUseCase } from "./CriarNewsLettrsUseCase";

class CriarNewsLettrsController{
    async handle(req: Request, res: Response){
        const { id, nome, email, mensagem } = req.body;
        const criar = new CriarNewsLettrsUseCase();
        const criarNew = await criar.execute({id, nome, email, mensagem});
        return res.status(201).json(criarNew);
    }
}

export { CriarNewsLettrsController }