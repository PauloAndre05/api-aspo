import { Agendamento } from "@prisma/client";
import { IAgendamentoRepository } from "../../repositories/IAgendamentoRepository";
import { RequestError } from "../../../../appErrors/ErrorApi";

class EliminarAgendamentoUseCase {
    constructor(private agendamentoRepository: IAgendamentoRepository) {}

    async execute(id: string): Promise<Agendamento> {
        const agendamentoExists = await this.agendamentoRepository.findById(id);

        if(!agendamentoExists) throw new RequestError("Agendamento não existe");

        return await this.agendamentoRepository.delete(id);
    }
}

export  { EliminarAgendamentoUseCase }