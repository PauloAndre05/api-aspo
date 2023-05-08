import { Request, Response } from "express";
import { AtualizarIdentificaoUseCase } from "./AtualizarIdentificacaoUseCase";

class AtualizarIdentificaoController{
    async handle(req: Request, res: Response){
        const { BI } = req.params;
        const { nome, dataDeNascimento} = req.body;
        const atulizarId = new AtualizarIdentificaoUseCase();
        const atualizar = await atulizarId.execute({BI, nome, dataDeNascimento});
        return res.status(202).json(atualizar);
    }

}

export { AtualizarIdentificaoController }