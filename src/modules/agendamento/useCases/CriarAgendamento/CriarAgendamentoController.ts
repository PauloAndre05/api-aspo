import { Request, Response } from "express";
import { CriarAgendamentoUseCase } from "./CriarAgendamentoUseCase";

export class CriarAgendamentoController {
    constructor(private criarAgendamentoUseCase: CriarAgendamentoUseCase) {}

    async handle(req: Request, res: Response){
        const { dataAgenda, servicoId, postoId, horarioId, telefone, email } = req.body;

        const agendamento = await this.criarAgendamentoUseCase.execute({ dataAgenda, servicoId, postoId, horarioId, telefone, email });
        return res.status(201).json(agendamento);
    }
}