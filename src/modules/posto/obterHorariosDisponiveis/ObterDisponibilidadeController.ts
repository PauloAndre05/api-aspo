import { Response, Request } from "express";
import { ObterHorariosDisponiveisUseCase } from "./ObterDisponibilidadeUseCase";
import { AgendamentoRepository } from "../../agendamento/repositories/implementation/AgendamentoRepository";

export class ObterHorariosDisponiveisController {
    async handle(req: Request, res: Response): Promise<Response> {
        const { id, dataAgenda } = req.params
        const agendamentoRepository = new AgendamentoRepository();
        const obterHorariosDisponiveisUseCase = new ObterHorariosDisponiveisUseCase(agendamentoRepository);

        console.log(id, dataAgenda);

        const horariosDisponiveis = await obterHorariosDisponiveisUseCase.execute({ id, dataAgenda });

        return res.status(200).json({ horariosDisponiveis });
    }
}