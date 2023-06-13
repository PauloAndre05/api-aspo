import { prisma } from "../../../prisma/client";
import { RequestError } from "../../../appErrors/ErrorApi";
import { IAgendamentoRepository } from "../../agendamento/repositories/IAgendamentoRepository";

interface IRequest {
    postoId: string;
    dataAgenda: string;
}


export class ObterDisponibilidadeUseCase {
    constructor(private agendamentoRepository: IAgendamentoRepository) {}
    async execute({ postoId, dataAgenda }: IRequest): Promise<void>{
        const posto = await prisma.posto.findUnique({
            where: {
                id: postoId
            }
        })

        if(!posto) {
            throw new RequestError("Posto nao encontrado", 404)
        }


        const agendamentos = await prisma.agendamento.findMany({
            where: {
                postoId,
                dataAgenda
            }
        })

        agendamentos.map(async (agendamento) => {
            const a = await this.agendamentoRepository.getTotalBookingsForTheTime(agendamento.dataAgenda, agendamento.horaId, agendamento.postoId)
        })
    }
}