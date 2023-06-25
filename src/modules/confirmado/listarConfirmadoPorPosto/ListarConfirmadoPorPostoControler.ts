import { Request, Response } from "express";
import { ListarConfirmadoPorPostoUseCase } from "./ListarConfirmadoPorPostoUseCase";

export class ListarConfirmadoPorPostoControler {
    async handle(req: Request, res: Response){
        const { postoId } = req.params
        const lista = new ListarConfirmadoPorPostoUseCase() 
        const listaFinal = await lista.execute(postoId)
        return res.status(200).json(listaFinal)
    }
}