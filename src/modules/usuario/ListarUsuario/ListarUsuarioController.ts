import { Request, Response } from "express";
import { ListarUsuarioUseCase } from "../ListarUsuario/ListarUsuarioUseCase";

class ListarUsuarioController{
    async handle(req: Request, res: Response){
        const usuario = new ListarUsuarioUseCase();
        const ListarUsuario = await usuario.execute();
        return res.status(201).json(ListarUsuario);
    }
}

export  { ListarUsuarioController }