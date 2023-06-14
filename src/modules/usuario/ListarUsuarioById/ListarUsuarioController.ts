import { Request, Response } from "express";
import { ListarUsuarioUseCase } from "./ListarUsuarioUseCase";

class ListarUsuarioByIdController {
    async handle(req: Request, res: Response) {
        const { id } = req.params
        const usuario = new ListarUsuarioUseCase();
        const ListarUsuario = await usuario.execute(id);
        return res.status(201).json(ListarUsuario);
    }
}

export { ListarUsuarioByIdController }