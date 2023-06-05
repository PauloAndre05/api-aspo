import { Request, Response } from "express";
import { AtualizarUsuarioUseCase } from "../AtualizarUsuario/AtualizarUsuarioUseCase";

class AtualizarUsuarioController{
    async handle(req: Request, res: Response){
        const { id } = req.params;
        const { nome, email, senha, cargo, postoId, tipo} = req.body;
        const atulizarUsuario = new AtualizarUsuarioUseCase();
        const atualizar = await atulizarUsuario.execute({id, nome, email, senha, cargo, postoId, tipo});
        return res.status(202).json(atualizar);
    }

}

export { AtualizarUsuarioController }