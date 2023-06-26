import { Posto } from "@prisma/client";
import { prisma } from "../../../prisma/client";
import { RequestError } from "../../../appErrors/ErrorApi";

export class ListarPostoPorPostoIdUseCase {
    async execute(postoId: string): Promise<Posto>{
        const posto = await prisma.posto.findUnique({
            where:{
                id: postoId
            },
            include:{
                Agendamento: true,
                Confirmado: true,
                Cancelado: true
            }
        })

        if(!posto) throw new RequestError("Erro ao listar posto de atendimento")
        return posto
    }
}