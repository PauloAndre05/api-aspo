import { Request, Response } from "express";
import { ListarServicoUseCase } from "./ListarServicoUseCase";

class ListarServicoController{
    async handle(req: Request, res: Response){
        const lista = new ListarServicoUseCase();
        const listarServico = await lista.execute();
        return res.status(201).json(listarServico);
    }
}

export { ListarServicoController }