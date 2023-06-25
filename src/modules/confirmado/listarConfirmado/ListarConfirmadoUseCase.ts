import { Confirmado } from "@prisma/client";
import { prisma } from "../../../prisma/client";
import { RequestError } from "../../../appErrors/ErrorApi";

export class ListarConfirmadoUseCase {
    async execute(): Promise<Confirmado[]>{
        const lista = await prisma.confirmado.findMany() 
        if(!lista) throw new RequestError("Lista de confirmados não encontrado")
        return lista
    }
}