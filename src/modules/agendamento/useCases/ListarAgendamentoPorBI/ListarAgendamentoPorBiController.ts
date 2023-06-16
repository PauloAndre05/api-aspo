import { Response, Request } from "express";
import { ListarAgedamentoPorBIUseCase } from "./ListarAgedamentoPorBIUseCase";

export class ListarAgendamentoPorBiController {
    async handle(req: Request, res: Response ){
        const { bi } = req.params
        const agendamentoEncontrado = new ListarAgedamentoPorBIUseCase() 
        const agendamento = await agendamentoEncontrado.execute(bi)
        return res.status(201).json(agendamento)
    }
}