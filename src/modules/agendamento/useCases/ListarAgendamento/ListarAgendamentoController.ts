import { Request, Response } from "express";
import { ListarAgendamentoUseCase } from "./ListarAgendamentoUseCase";

class ListarAgendamentoController{
    async handle(req: Request, res: Response){
        const agend = new ListarAgendamentoUseCase();
        const listarAgendamento = await agend.execute();
        return res.status(201).json(listarAgendamento);
    }
}

export  { ListarAgendamentoController }