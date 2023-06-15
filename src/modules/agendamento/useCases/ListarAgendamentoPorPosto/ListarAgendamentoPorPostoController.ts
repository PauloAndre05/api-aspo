import { Request, Response } from "express";
import { ListarAgendamentoPorPostoUseCase } from "./ListarAgendamentoPorPostoUseCase";


export class ListarAgendamentoPorPostoController {
    async handle(req: Request, res: Response) {
        const { postoId } = req.params
        const listagem = new ListarAgendamentoPorPostoUseCase();
        const ListarAgendamento = await listagem.execute(postoId);
        return res.status(201).json(ListarAgendamento);
    }
}