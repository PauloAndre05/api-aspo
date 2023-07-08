import { Request, Response } from "express";
import { ActualizarUseCase } from "./ActualizarUseCase";

export class ActualizarControlor {
  async handle (req: Request, res: Response){
    const { id } = req.params
    const { nome, senha, email } = req.body
    const user = new ActualizarUseCase()
    const updateUser = await user.execute({ id, nome, senha, email }) 

    res.status(200).json(updateUser)
  }
}