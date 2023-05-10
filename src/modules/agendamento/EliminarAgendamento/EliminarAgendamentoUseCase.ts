import { Agendamento } from "@prisma/client";
import { prisma } from "./../../../prisma/clint";

class EliminarAgendamentoUseCase{
    async execute({id}: any): Promise<Agendamento>{
        const ifEsxists = await prisma.agendamento.findUnique({where:{id}});
        if(!ifEsxists) throw new Error("Agendamento não existe");
        const eliminar = await prisma.agendamento.delete({where: {id}});
        if(!eliminar) throw new Error("Erro ao Eliminar o Agendamento");
        return eliminar;
    }
}

export  { EliminarAgendamentoUseCase }