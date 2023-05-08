import { Request, Response } from "express";
import { CriarServicoUseCase } from "./CriarServicoUseCase";

class CriarServicoController{
    async handle(req: Request, res: Response){
        const {id, nome, createdAt, Agendamento} = req.body;
        const criatedService = new CriarServicoUseCase();
        const finalService = await criatedService.execute({id,nome, createdAt});
        return res.status(201).json(finalService);
    }
}

export { CriarServicoController }