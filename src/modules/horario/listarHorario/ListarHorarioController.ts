import { Request, Response } from "express";
import { ListarHorarioUseCase } from "./ListarHorarioUseCase";

export class ListarHorarioController {
    async handle (req: Request, res: Response){
        const lista = new ListarHorarioUseCase()
        const  listaHorario = await lista.execute()
        return res.status(201).json(listaHorario)
    }
}