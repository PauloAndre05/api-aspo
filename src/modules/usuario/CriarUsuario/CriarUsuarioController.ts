import { Request, Response } from "express";
import { CriarUsuarioUseCase } from '../CriarUsuario/CriarUsuarioUseCase';
import { prisma } from "../../../prisma/clint";

class CriarUsuarioController {
  async handle(req: Request, res: Response) {
    const { id, nome, email, senha, cargo, postoId, tipo } = req.body;

    const criarUsuarioUseCase = new CriarUsuarioUseCase();

    try {
      const usuario = await criarUsuarioUseCase.execute({
        id,
        nome,
        email,
        senha,
        cargo,
        postoId,
        tipo,
      });

      return res.status(201).json(usuario);
    } catch (error: any) {
      return res.status(400).json({ error: error.message });
    }
  }
}

export { CriarUsuarioController };

