import { Request, Response } from "express";
import { EliminarIdentificacaoUseCase } from "./EliminarIdentificacaoUseCase"

class EliminarIdentificacaoController{
    async handle(req: Request, res: Response){
        const {id} = req.params;
        const eliminarId = new EliminarIdentificacaoUseCase();
        const eliminar = await eliminarId.execute({id});
        return res.status(201).json(eliminar);
    }
}

export { EliminarIdentificacaoController }