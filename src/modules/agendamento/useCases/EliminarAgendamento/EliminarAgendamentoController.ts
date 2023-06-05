import { Request, Response } from "express";
import { EliminarAgendamentoUseCase } from "./EliminarAgendamentoUseCase";

class EliminarAgendamentoController {
    constructor(private eliminarAgendamentoUseCase: EliminarAgendamentoUseCase) {}

    async handle(req: Request, res: Response){
        const { id } = req.params;
        const agendamentoEliminado = await this.eliminarAgendamentoUseCase.execute(id)
        return res.status(201).json(agendamentoEliminado)
    }
}

export  { EliminarAgendamentoController }