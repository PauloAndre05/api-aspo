import { Request, Response } from "express";
import { AtualizarUsuarioUseCase } from "../AtualizarUsuario/AtualizarUsuarioUseCase";

class AtualizarUsuarioController{
    async handle(req: Request, res: Response){
        const { id } = req.params;
        const { nome, utilizador, senha, cargo} = req.body;
        const atulizarUsuario = new AtualizarUsuarioUseCase();
        const atualizar = await atulizarUsuario.execute({id, nome, utilizador, senha, cargo});
        return res.status(202).json(atualizar);
    }

}

export { AtualizarUsuarioController }