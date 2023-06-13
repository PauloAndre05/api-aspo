import { Request, Response } from "express";
import { ListarAgendamentoUseCase } from "./ListarAgendamentoUseCase";

class ListarAgendamentoController {
    constructor(private listarAgendamentoUseCase: ListarAgendamentoUseCase) {}
    async handle(req: Request, res: Response){
        const agendamentos = await this.listarAgendamentoUseCase.execute();
        return res.status(201).json(agendamentos);
    }
}

export  { ListarAgendamentoController }