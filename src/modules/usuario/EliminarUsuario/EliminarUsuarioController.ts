import { Request, Response } from "express";
import { EliminarUsuarioUseCase } from "./EliminarUsuarioUseCase";

export class EliminarUsuarioController{
    async handle (req: Request, res:Response){
        const { id } = req.params
        const deleteUser = new EliminarUsuarioUseCase()
        const userDeleted = await deleteUser.execute({id})
        return res.status(201).json(userDeleted)
    }
}