import { Request, Response } from "express";
import { CriarServicoUseCase } from "./CriarServicoUseCase";

class CriarServicoController{
    async handle(req: Request, res: Response){
        const {id, nome, descricao, createdAt} = req.body;
        const criatedService = new CriarServicoUseCase();
        const finalService = await criatedService.execute({id, nome, descricao, createdAt});
        return res.status(201).json(finalService);
    }
}

export { CriarServicoController }