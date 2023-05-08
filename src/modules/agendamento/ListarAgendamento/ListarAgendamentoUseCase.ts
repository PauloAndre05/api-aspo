import { Agendamento } from "@prisma/client";
import { prisma } from "../../../prisma/clint";

class ListarAgendamentoUseCase{
    async execute(): Promise<Agendamento[]>{
        const listaAgendamento = await prisma.agendamento.findMany();
        if(!listaAgendamento) throw new Error("Erro ao consultar o Agendamento");
        return listaAgendamento;
    }
}

export { ListarAgendamentoUseCase }