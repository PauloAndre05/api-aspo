import { Request, Response } from "express";
import { ListarCanceladoPorPostoIdUseCase } from "./ListarCanceladoPorPostoIdUseCase";

export class ListarCanceladoPorPostoIdControler {
    async handle(req: Request, res: Response){
        const { postoId } = req.params
        const listagem = new ListarCanceladoPorPostoIdUseCase()
        const listaFinal = await listagem.execute( postoId )
        return res.status(200).json(listaFinal)
    }
}