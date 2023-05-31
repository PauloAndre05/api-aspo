import { Request, Response } from "express";
import { CriarUsuarioUseCase } from '../CriarUsuario/CriarUsuarioUseCase'

class CriarUsuarioController{
    async handle (req: Request, res: Response){
        const {id, nome, utilizador, senha, cargo} = req.body
        const criarUsuario = new CriarUsuarioUseCase()

        const usuario = await criarUsuario.execute({id, nome, utilizador, senha, cargo})
        return res.status(201).json(usuario)
    }
}

export {CriarUsuarioController}