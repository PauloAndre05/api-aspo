import { Request, Response } from "express";
import { EliminarAgendamentoPorComprovativoUseCase } from "./EliminarAgendamentoPorComprovativoUseCase";

export class EliminarAgendamentoPorComprovativoController{
    async handle(req: Request, res:Response){
        const {comprovativo} = req.params
        const eliminar = new EliminarAgendamentoPorComprovativoUseCase()
        const agendamentoEliminado = await eliminar.execute(comprovativo)
        return res.status(201).json(agendamentoEliminado)
    }
}