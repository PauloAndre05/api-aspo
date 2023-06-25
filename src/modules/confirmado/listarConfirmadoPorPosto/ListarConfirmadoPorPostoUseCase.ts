import { Confirmado } from "@prisma/client";
import { prisma } from "../../../prisma/client";
import { RequestError } from "../../../appErrors/ErrorApi";

export class ListarConfirmadoPorPostoUseCase {
    async execute(postoId: string): Promise<Confirmado[]>{
        const lista = await prisma.confirmado.findMany({
            where: {
                postoAtendimento:{
                    id: postoId
                }
            }
        })

        if(!lista) throw new RequestError("Erro ao listar confirmados! ")
        return lista
    }
}