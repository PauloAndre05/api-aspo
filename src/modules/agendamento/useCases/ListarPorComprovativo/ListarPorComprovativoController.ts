import { Request, Response } from "express";
import { ListarPorComprovativoUseCase } from "./ListarPorComprovativoUseCase";

export class ListarPorComprovativoController{
    async handle (req: Request, res: Response){
        const { comprovativo } = req.params
        const comprovativoEncontrado = new ListarPorComprovativoUseCase()
        const novoComprovativo =  await comprovativoEncontrado.execute(comprovativo)
    }
}