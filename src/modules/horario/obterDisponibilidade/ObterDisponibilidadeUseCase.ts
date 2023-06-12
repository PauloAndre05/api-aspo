import { Agendamento } from "@prisma/client";
import { prisma } from "../../../prisma/client";
import { RequestError } from "../../../appErrors/ErrorApi";

interface IRequest {
    postoId: string;
    dataAgenda: string;
    horaId: string;
}


export class ObterDisponibilidadeUseCase {
    async execute({ postoId, dataAgenda, horaId }: IRequest): Promise<boolean>{
        const posto = await prisma.posto.findUnique({
            where: {
                id: postoId
            }
        })

        if(!posto) {
            throw new RequestError("Posto nao encontrado", 404)
        }

        const horario = await prisma.horario.findUnique({where: {
            id: horaId
        }})

        if(!horario) throw new RequestError("Horario nao encontrado", 404)

        const a = await prisma.agendamento.count({
            where: {
                postoId,
                dataAgenda,
                horaId
            }
        })
        
        return a < 10 ? true: false       
    }
}