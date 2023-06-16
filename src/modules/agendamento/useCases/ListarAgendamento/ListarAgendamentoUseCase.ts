import { Agendamento } from "@prisma/client";
import { IAgendamentoRepository } from "../../repositories/IAgendamentoRepository";

class ListarAgendamentoUseCase {
    constructor(private agendamentoRepository: IAgendamentoRepository) {}
    async execute(): Promise<Agendamento[]> {
        return await this.agendamentoRepository.list();
    }
}

export { ListarAgendamentoUseCase }     