import { Agendamento } from "@prisma/client";
import { prisma } from "../../../../prisma/client";


export class ListarAgendamentoPorPostoUseCase {
    async execute(postoId: string): Promise<Agendamento[]> {
        const lista = await prisma.agendamento.findMany({
            where: {
                postoId: postoId
            },
            include: {
                horario: true,
                servico: true,
                postoAtendimento: true,
            }
        });
        if (!lista) throw new Error("Erro ao listar agendamentos");
        return lista;
    }
}