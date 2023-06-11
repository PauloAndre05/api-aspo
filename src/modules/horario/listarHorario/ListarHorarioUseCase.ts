import { Horario } from "@prisma/client";
import { prisma } from "../../../prisma/client";
import { RequestError } from "../../../appErrors/ErrorApi";

export class ListarHorarioUseCase{
    async execute(): Promise<Horario[]>{
        const lista = await prisma.horario.findMany()
        if(!lista) throw new RequestError("Erro ao listar os horários")
        return lista
    }
}