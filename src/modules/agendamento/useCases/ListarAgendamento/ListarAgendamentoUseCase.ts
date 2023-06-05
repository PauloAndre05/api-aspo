import { Agendamento } from "@prisma/client";
import { prisma } from "../../../prisma/clint";
import { RequestError } from "../../../appErrors/ErrorApi";

class ListarAgendamentoUseCase{
    async execute(): Promise<Agendamento[]>{
        const listaAgendamento = await prisma.agendamento.findMany();
        if(!listaAgendamento) throw new RequestError("Erro ao consultar o Agendamento");
        return listaAgendamento;
    }
}

export { ListarAgendamentoUseCase }