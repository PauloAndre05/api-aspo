import { Request, Response } from "express";
import { ListarAgendamentoByDataAgendaUseCase } from "./ListarAgendamentoByDataAgendaUseCase";

export class ListarAgendamentoByDataAgendaControler {
    async handle(req: Request, res: Response){
        const { dataAgenda } = req.params
        const listagem = new ListarAgendamentoByDataAgendaUseCase()
        const listaFinal = await listagem.execute(dataAgenda)
        return res.status(200).json(listaFinal)
    }
}