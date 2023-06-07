import { Request, Response } from "express";
import { AtualizarServicoUseCase } from "./AtualizarServicoUseCase";

class AtualizarServicoController{
    async handle(req: Request, res: Response){
        const { id } = req.params;
        const { nome, descricao, createdAt } = req.body;
        const atualizar = new AtualizarServicoUseCase();
        const atualize = await atualizar.execute({ id, nome, descricao, createdAt});
        return res.status(202).json(atualize);
    }
}

export { AtualizarServicoController }