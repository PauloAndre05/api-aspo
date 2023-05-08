import { Request, Response } from "express";
import { AtualizarPostoUseCase } from "./AtualizarPostoUseCase";

class AtualizarPostoController{
    async handle(req: Request, res: Response){
        const { id } = req.params;
        const { nome, local, cordenadas } = req.body;
        const atualizar = new AtualizarPostoUseCase();
        const atualize = await atualizar.execute({id, nome, local, cordenadas});
        return res.status(202).json(atualize);
    }
}

export { AtualizarPostoController }