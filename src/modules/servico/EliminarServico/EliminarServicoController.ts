import { Request, Response } from "express";
import { EliminarServicoUseCase } from "./EliminarServicoUseCase";

class EliminarServicoController{
    async handle(req: Request, res: Response){
        const { id } = req.params;
        const eliminar = new EliminarServicoUseCase();
        const elimine = await eliminar.execute({id});
        return res.status(200).json(elimine);
    }
}

export { EliminarServicoController }