import { Request, Response } from "express";
import { EliminarAgendamentoUseCase } from "./EliminarAgendamentoUseCase";

class EliminarAgendamentoController{
    async handle(req: Request, res: Response){
        const {id} = req.params;
        const eliminarAgendamento = new EliminarAgendamentoUseCase();
        const eliminar = await eliminarAgendamento.execute({id})
        return res.status(201).json(eliminar)
    }
}

export  { EliminarAgendamentoController }