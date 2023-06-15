import { Agendamento } from "@prisma/client";
import { prisma } from "../../../../prisma/client";


export class ListarAgendamentoByIdUseCase {
    async execute(id: string): Promise<Agendamento> {
        const lista = await prisma.agendamento.findFirst({
            where: {
                id: id
            },
            include: {
                horario: true,
                servico: true,
                postoAtendimento: true
            }
        });
        if (!lista) throw new Error("Erro ao listar agendamento");
        return lista;
    }
}