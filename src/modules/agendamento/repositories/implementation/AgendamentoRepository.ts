import { Agendamento, Horario, Posto, Servico } from "@prisma/client";
import { IAgendamentoRepository } from "../IAgendamentoRepository";
import { ICriarAgendamentoDTO } from "../../dtos";
import { prisma } from "../../../../prisma/client";


export class AgendamentoRepository implements IAgendamentoRepository {
    async create({ dataAgenda, servicoId, postoId, horarioId, telefone, email }: ICriarAgendamentoDTO): Promise<Agendamento> {
        return await prisma.agendamento.create({
            data: {
                dataAgenda,
                servicoId,
                postoId,
                horaId: horarioId,
                telefone,
                email
            }
        })
    }

    async findById(id: string): Promise<Agendamento | null> {
        return await prisma.agendamento.findUnique({
            where: {
                id
            }
        })
    }

    async findStationById(id: string): Promise<Posto | null> {
        return await prisma.posto.findUnique({
            where: {
                id
            }
        })
    }

    async findServiceById(id: string): Promise<Servico | null> {
        return await prisma.servico.findUnique({
            where: {
                id
            }
        })
    }

    async findTimeById(id: string): Promise<Horario | null> {
        return await prisma.horario.findUnique({
            where: {
                id
            }
        })
    }

    async getTotalBookingsForTheDate(dataAgenda: string, postoId: string): Promise<number> {
        return await prisma.agendamento.count({
            where: {
                postoId,
                dataAgenda
            }
        })
    }

    async getTotalBookingsForTheTime(dataAgenda: string, horarioId: string, postoId: string): Promise<number> {
        return await prisma.agendamento.count({
            where: {
                postoId,
                dataAgenda,
                horaId: horarioId
            }
        })
    }

    /* async findByName(nome: string): Promise<Agendamento | null> {
        return await prisma.agendamento.findFirst({
            where: {
                nome
            }
        })
    } */

    async listByPostoId(postoId: string): Promise<Agendamento[]> {
        return await prisma.agendamento.findMany({
            where: {
                postoId
            }
        })
    }

    async list(): Promise<Agendamento[]> {
        return await prisma.agendamento.findMany()
    }

    async delete(id: string): Promise<Agendamento> {
        return await prisma.agendamento.delete({
            where: {
                id
            }
        })
    }
}