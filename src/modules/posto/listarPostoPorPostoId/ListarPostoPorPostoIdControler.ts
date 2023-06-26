import { Request, Response } from "express";
import { ListarPostoPorPostoIdUseCase } from "./ListarPostoPorPostoIdUseCase";

export class ListarPostoPorPostoIdControler {
    async handle(req: Request, res: Response){
        const { postoId } = req.params
        const posto = new ListarPostoPorPostoIdUseCase()
        const postoEncotrado = await posto.execute( postoId )
        return res.status(200).json(postoEncotrado)
    }
}