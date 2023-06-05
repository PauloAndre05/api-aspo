import { Agendamento } from "@prisma/client";
import { ICriarAgendamentoDTO } from "../../dtos";
import { IAgendamentoRepository } from "../../repositories/IAgendamentoRepository";

export class CriarAgendamentoUseCase {
    constructor(private agendamentoRepository: IAgendamentoRepository) {}

    async execute({ dataAgenda, servicoId, postoId, telefone, email }: ICriarAgendamentoDTO): Promise<Agendamento>{
        return await this.agendamentoRepository.create({ dataAgenda, servicoId, postoId, telefone, email })        
    }
}