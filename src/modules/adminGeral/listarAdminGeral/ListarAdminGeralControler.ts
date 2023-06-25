import { Request, Response } from "express";
import { ListarAdminGeralUseCase } from "./ListarAdminGeralUseCase";

export class ListarAdminGeralControler {
    async handle(req:Request, res:Response){
        const adminGeral = new ListarAdminGeralUseCase()
        const listarAdmin = await adminGeral.execute()
        return res.status(200).json(listarAdmin)
    }
}