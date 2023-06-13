import { Request, Response } from "express";
import { ListarUsuarioDesativadoUseCase } from "./ListarUsuarioDesativadoUseCase";

class ListarUsuarioDesativadoController {
    async handle(req: Request, res: Response) {
        const usuario = new ListarUsuarioDesativadoUseCase();
        const ListarUsuario = await usuario.execute();
        return res.status(201).json(ListarUsuario);
    }
}

export { ListarUsuarioDesativadoController }