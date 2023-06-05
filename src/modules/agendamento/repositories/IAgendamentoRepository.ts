import { Agendamento } from "@prisma/client";
import { ICriarAgendamentoDTO } from "../dtos";

export interface IAgendamentoRepository {
    create({ dataAgenda, servicoId, postoId, telefone, email }: ICriarAgendamentoDTO): Promise<Agendamento>
    findById(id: string): Promise<Agendamento | null>;
    // findByName(nome: string): Promise<Agendamento | null>;
    listByPostoId(postoId:string): Promise<Agendamento[]>;
    list(): Promise<Agendamento[]>;
    delete(id: string): Promise<Agendamento>;
}