import { Request, Response } from "express";
import { AtualizarAgendamentoUseCase } from "./AtualizarAgendamentoUseCase";


class AtualizarAgendamentoController {
    constructor(private atualizarAgendamentoUseCase: AtualizarAgendamentoUseCase) {}
    async handle(req: Request, res: Response){
        const { id } = req.params;
        const {dataAgenda, servicoId, postoId, telefone, email, horaId, bi} = req.body;
        const agendamento = new AtualizarAgendamentoUseCase();
        const createdAt: Date = new Date
        const agendamentoFinal = await agendamento.execute({id ,dataAgenda, servicoId, postoId, telefone, email, horaId, bi, createdAt});
        return res.status(201).json(agendamentoFinal);
    }
}

export {AtualizarAgendamentoController}