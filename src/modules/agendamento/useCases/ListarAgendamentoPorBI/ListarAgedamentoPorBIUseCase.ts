import { Agendamento } from "@prisma/client";
import { prisma } from "../../../../prisma/client";
import { RequestError } from "../../../../appErrors/ErrorApi";

export class ListarAgedamentoPorBIUseCase{
    async execute(bi: string): Promise<Agendamento>{
        const existBi = await prisma.agendamento.findFirst(
            {where: 
                {
                   bi: bi
                },

                include:{
                    postoAtendimento: true,
                    horario: true,
                    servico: true
                }
            })
        if(!existBi) throw new RequestError("Bilhete de identidade não encontrado!")
        return existBi
    }
}