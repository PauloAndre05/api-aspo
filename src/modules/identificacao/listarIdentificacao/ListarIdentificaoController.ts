import { Request, Response } from "express";
import { ListarIdentificacaoUseCase } from "./ListarIdentificacaoUseCase";

class ListarIdentificacaoController{
    async handle(req: Request, res: Response){
        const identificacao = new ListarIdentificacaoUseCase();
        const ListarIdentificacao = await identificacao.execute();
        return res.status(201).json(ListarIdentificacao);
    }
}

export  { ListarIdentificacaoController }