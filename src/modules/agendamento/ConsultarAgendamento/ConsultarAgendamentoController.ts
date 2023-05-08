import { Request, Response } from "express";
import { ConsultarAgendamentoUseCase } from "./ConsultarAgendamentoUseCase";

class ConsultarAgendamentoController{
    async handle(req: Request, res: Response){
        const { id } = req.params;
        const consultar = new ConsultarAgendamentoUseCase();
        const consulte = await consultar.execute({id});
        return res.status(201).json(consulte);
    }
}

export  { ConsultarAgendamentoController }