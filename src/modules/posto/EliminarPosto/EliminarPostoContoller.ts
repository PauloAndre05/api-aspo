import {Request, Response} from "express";
import { EliminarPostoUseCase } from "./EliminarPostoUseCase"

class EliminarPostoController{
    async handle(req: Request, res: Response){
        const { id } = req.params;
        const eliminar = new EliminarPostoUseCase();
        const eliminado = await eliminar.execute(id);
        return res.status(200).json(eliminado)
    }
}

export { EliminarPostoController }