import { Agendamento } from "@prisma/client";
import { ICriarAgendamentoDTO } from "../../dtos";
import { IAgendamentoRepository } from "../../repositories/IAgendamentoRepository";
import { RequestError } from "../../../../appErrors/ErrorApi";

export class CriarAgendamentoUseCase {
    constructor(private agendamentoRepository: IAgendamentoRepository) {}

    async execute({ dataAgenda, servicoId, postoId, horaId, telefone, email, bi, nome }: ICriarAgendamentoDTO): Promise<Agendamento> {
        const station = await this.agendamentoRepository.findStationById(postoId);

        if(!station) {
            throw new RequestError("Posto não encontrado", 404)
        }

        const service = await this.agendamentoRepository.findServiceById(servicoId)

        if(!service) {
            throw new RequestError("Serviço não encontrado", 404)
        }

        const time = await this.agendamentoRepository.findTimeById(horaId)

        if(!time) {
            throw new RequestError("Horário não encontrado", 404)
        }

        const totalBookingsForTheDate = await this.agendamentoRepository.getTotalBookingsForTheDate(dataAgenda, postoId)

        if(totalBookingsForTheDate === station.limiteDiario) {
            throw new RequestError("Limite de agendamentos atingido nesta data", 400)
        }

        const totalBookingsForTheTime = await this.agendamentoRepository.getTotalBookingsForTheTime(dataAgenda, horaId, postoId);

        if(totalBookingsForTheTime === 10) {
            throw new RequestError("Limite de agendamentos atingido neste horário", 400)
        }

        return await this.agendamentoRepository.create({ dataAgenda, servicoId, postoId, horaId, telefone, email, bi, nome })        
    }
}