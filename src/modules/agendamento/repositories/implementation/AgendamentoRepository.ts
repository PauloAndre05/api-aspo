import { Agendamento } from "@prisma/client";
import { IAgendamentoRepository } from "../IAgendamentoRepository";
import { ICriarAgendamentoDTO } from "../../dtos";
import { prisma } from "../../../../prisma/client";


export class AgendamentoRepository implements IAgendamentoRepository {
    async create({ dataAgenda, servicoId, postoId, telefone, email, bi, horaId }: ICriarAgendamentoDTO): Promise<Agendamento> {
        return await prisma.agendamento.create({
            data: {
                bi, 
                horaId,
                dataAgenda,
                servicoId,
                postoId,
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