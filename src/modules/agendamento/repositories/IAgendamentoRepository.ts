import { Agendamento, Horario, Posto, Servico } from "@prisma/client";
import { ICriarAgendamentoDTO } from "../dtos";

export interface IAgendamentoRepository {
    create({ dataAgenda, servicoId, postoId, horaId, telefone, email }: ICriarAgendamentoDTO): Promise<Agendamento>
    findById(id: string): Promise<Agendamento | null>;
    findStationById(id: string): Promise<Posto | null>
    findServiceById(id: string): Promise<Servico | null>
    findTimeById(id: string): Promise<Horario | null>
    // findByName(nome: string): Promise<Agendamento | null>;
    getTotalBookingsForTheDate(dataAgenda: string, postoId: string): Promise<number>
    getTotalBookingsForTheTime(dataAgenda: string, horarioId: string, postoId: string): Promise<number>
    listByPostoId(postoId:string): Promise<Agendamento[]>;
    list(): Promise<Agendamento[]>;
    delete(id: string): Promise<Agendamento>;
}