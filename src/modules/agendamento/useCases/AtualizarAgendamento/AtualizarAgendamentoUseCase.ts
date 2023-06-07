import { Agendamento } from "@prisma/client";
import { prisma } from "../../../../prisma/client";
import { RequestError } from "../../../../appErrors/ErrorApi";

class AtualizarAgendamentoUseCase{
    async execute({id, dataAgenda, servicoId, postoId, telefone, email, }: Agendamento): Promise<Agendamento>{
        const ifBiexist = await prisma.agendamento.findUnique({where:{id}});
        if(!ifBiexist) throw new RequestError("BI inválido");
        const agendar = await prisma.agendamento.update({where:{ id },
            data: {dataAgenda, servicoId, postoId, telefone, email, id}});
        if(!agendar) throw new RequestError("Erro  ao atualizar o agendamento");
        return agendar;        
    }
}

export {AtualizarAgendamentoUseCase}