import { prisma } from "../../../prisma/client";
import { RequestError } from "../../../appErrors/ErrorApi";
import { IAgendamentoRepository } from "../../agendamento/repositories/IAgendamentoRepository";

interface IRequest {
    postoId: string;
    dataAgenda: string;
}

export class ObterHorariosDisponiveisUseCase {
    constructor(private agendamentoRepository: IAgendamentoRepository) {}
    async execute({ postoId, dataAgenda }: IRequest): Promise<string[]>{
        const posto = await prisma.posto.findUnique({
            where: {
                id: postoId
            }
        })

        if(!posto) {
            throw new RequestError("Posto nao encontrado", 404)
        }

        const horarios = await prisma.horario.findMany();
        const horariosDisponiveis: string[] = [];


        for(const horario of horarios) {
            const totalAgendamentos = await this.agendamentoRepository.getTotalBookingsForTheTime(dataAgenda, horario.id, postoId);

            if (totalAgendamentos < 10) {
                horariosDisponiveis.push(horario.hora);   
            }
        }        

        return horariosDisponiveis;
    }
}