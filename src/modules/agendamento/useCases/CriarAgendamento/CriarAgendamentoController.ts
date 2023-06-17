import { Request, Response } from "express";
import { CriarAgendamentoUseCase } from "./CriarAgendamentoUseCase";

export class CriarAgendamentoController {
    constructor(private criarAgendamentoUseCase: CriarAgendamentoUseCase) {}

    async handle(req: Request, res: Response){
        const { dataAgenda, servicoId, postoId, horaId, bi, cedula, telefone, email, nome } = req.body;

        const agendamento = await this.criarAgendamentoUseCase.execute({ dataAgenda, servicoId, postoId, telefone, email, bi, cedula, horaId, nome });
        return res.status(201).json(agendamento);
    }
}