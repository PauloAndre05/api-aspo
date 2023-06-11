import { Horario } from "@prisma/client";
import { prisma } from "../../../prisma/client";
import { RequestError } from "../../../appErrors/ErrorApi";

export class CriarHorarioUseCase{
    async execute ({ hora }: Horario): Promise<Horario>{
        const criarHora = await  prisma.horario.create({data: {hora}})
        if (!criarHora) throw new RequestError("Erro ao cadastrar a hora")
        return criarHora
    }
}