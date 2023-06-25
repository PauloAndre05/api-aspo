import { Request, Response } from "express";
import { ListarConfirmadoUseCase } from "./ListarConfirmadoUseCase";

export class ListarConfirmadoControler {
    async handle(req: Request, res: Response) {
        const lista = new ListarConfirmadoUseCase()
        const listaFial = await lista.execute()
        return res.status(200).json(listaFial)
    }
}