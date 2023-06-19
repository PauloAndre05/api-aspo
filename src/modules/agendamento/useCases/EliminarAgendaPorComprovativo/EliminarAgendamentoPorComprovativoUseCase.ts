import { Agendamento } from "@prisma/client";
import { prisma } from "../../../../prisma/client";
import { RequestError } from "../../../../appErrors/ErrorApi";

export class EliminarAgendamentoPorComprovativoUseCase{
    async execute( comprovativo: any): Promise<Agendamento>{
        const existeAgendamento = await prisma.agendamento.findUnique({
            where:{
                comprovativo
            }
        })
        if(!existeAgendamento) throw new RequestError('Agendamento não encontrado!')

        const cancelarAgendamento = await prisma.agendamento.delete({where: {comprovativo}})
        return cancelarAgendamento
    }
}