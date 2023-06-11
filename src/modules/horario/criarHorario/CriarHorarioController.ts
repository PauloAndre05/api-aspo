import { Request, Response } from "express";
import { CriarHorarioUseCase } from "./CriarHorarioUseCase";

export class CriarHorarioController {
    async handle ( req: Request, res: Response){
        const {id, hora} = req.body
        const criarHora = new CriarHorarioUseCase()
        const horas = await criarHora.execute({id, hora}) 
        return res.status(201).json(horas)
    }
}