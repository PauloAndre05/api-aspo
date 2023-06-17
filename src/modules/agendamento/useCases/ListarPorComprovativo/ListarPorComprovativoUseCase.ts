import { Agendamento } from "@prisma/client";
import { prisma } from "../../../../prisma/client";
import { RequestError } from "../../../../appErrors/ErrorApi";

export class ListarPorComprovativoUseCase{
    async execute (comprovativo: string): Promise<Agendamento>{
        const existComprovaivo = await prisma.agendamento.findFirst({
            where: {
                comprovativo
            }
        })

        if(!existComprovaivo) throw new RequestError("Comprovativo não encontrado!")
        return existComprovaivo
    }
}