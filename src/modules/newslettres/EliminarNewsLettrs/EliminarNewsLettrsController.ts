import { Request, Response } from "express";
import { EliminarNewsLettrsUseCase } from "./EliminarNewsLettrsUseCase";

class EliminarNewsLettrsController{
    async handle(req: Request, res: Response){
        const { id } = req.params;
        const eliminar = new EliminarNewsLettrsUseCase();
        const eliminarId = await eliminar.execute({id});
        return res.status(201).json(eliminarId);
    }
}

export {  EliminarNewsLettrsController}