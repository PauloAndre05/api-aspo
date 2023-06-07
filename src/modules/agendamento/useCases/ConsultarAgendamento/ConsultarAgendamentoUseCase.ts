import { Agendamento } from "@prisma/client";
import { prisma } from "../../../../prisma/client";

class ConsultarAgendamentoUseCase{
    async execute({id}: any): Promise<Agendamento[]>{
        const listarConsulta = await prisma.agendamento.findMany({where: {id}});
        return listarConsulta;
    }
}

export { ConsultarAgendamentoUseCase }