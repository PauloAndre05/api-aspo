import { Agendamento } from "@prisma/client";
import { prisma } from "../../../../prisma/client";
import { RequestError } from "../../../../appErrors/ErrorApi";

export class ListarAgendamentoByDataAgendaUseCase {
    async execute(dataAgenda: string): Promise<Agendamento[]>{
        const lista = await prisma.agendamento.findMany({
            where:{
                dataAgenda
            }
        })

        if (!lista) throw new RequestError("Impossível listar agendamentos")
        return lista
    }
}