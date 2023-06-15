import { Request, Response } from "express";
import { ListarAgendamentoByIdUseCase } from "./ListarAgendamentoByIdUseCase";


export class ListarAgendamentoByIdController {
    async handle(req: Request, res: Response) {
        const { id } = req.params
        const usuario = new ListarAgendamentoByIdUseCase();
        const ListarAgendamento = await usuario.execute(id);
        return res.status(201).json(ListarAgendamento);
    }
}