import { Request, Response } from "express";
import { ListarAdminPorIdUseCase } from "./ListarAdminPorIdUseCase";

export class ListarAdminPorIdControler {
    async handle(req:Request, res:Response){
        const { id } = req.params
        const adminGeral = new ListarAdminPorIdUseCase()
        const listarAdmin = await adminGeral.execute(id)
        return res.status(200).json(listarAdmin)
    }
}