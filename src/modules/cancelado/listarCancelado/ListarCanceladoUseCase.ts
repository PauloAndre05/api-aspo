import { Cancelado } from "@prisma/client";
import { prisma } from "../../../prisma/client";
import { RequestError } from "../../../appErrors/ErrorApi";

export class ListarCanceladoUseCase {
    async execute(): Promise<Cancelado[]>{
        const lista  = await prisma.cancelado.findMany()
        if(!lista) throw new RequestError("Lista não encontrada")
        return  lista
    }
}