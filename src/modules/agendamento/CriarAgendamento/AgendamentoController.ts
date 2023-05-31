import { Request, Response } from "express";
import { AgendamentoUseCase } from "./AgendamentoUseCase";

class AgendamentoController{
    async handle(req: Request, res: Response){
        const {dataAgenda, servicoId, postoId, telefone, email} = req.body;
        console.log(req.body);
        const agendamento = new AgendamentoUseCase();
        const id: string = "";
        const createdAt: Date = new Date
        const agendamentoFinal = await agendamento.execute({id ,dataAgenda, servicoId, postoId, telefone, email, createdAt});
        return res.status(201).json(agendamentoFinal);
    }
}

export {AgendamentoController}