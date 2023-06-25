import { Request, Response } from "express";
import { ListarCanceladoUseCase } from "./ListarCanceladoUseCase";

export class ListarCanceladoControler {
    async handle (req: Request,  res: Response){
        const lista = new ListarCanceladoUseCase()
        const listaFinal = await lista.execute()
        return res.status(200).json(listaFinal)
    }
}