import { Cancelado } from "@prisma/client";
import { prisma } from "../../../prisma/client";
import { RequestError } from "../../../appErrors/ErrorApi";

export class ListarCanceladoPorPostoIdUseCase {
    async execute( postoId: string ): Promise<Cancelado[]>{
        const lista = await prisma.cancelado.findMany({
            where:{
                postoAtendimento:{
                    id: postoId
                }
            }
        })

        if(!lista) throw new RequestError("Impossível listar cancelados")

        return lista
    }
}