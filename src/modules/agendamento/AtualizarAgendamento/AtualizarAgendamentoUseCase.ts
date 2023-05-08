import { Agendamento } from "@prisma/client";
import {prisma } from "..//..//..//prisma/clint";

class AtualizarAgendamentoUseCase{
    async execute({id, dataAgenda, servicoId, postoId, telefone, email, bi}: Agendamento): Promise<Agendamento>{
        const ifBiexist = await prisma.identificacao.findUnique({where:{BI:bi}});
        if(!ifBiexist) throw new Error("BI inválido");
        const agendar = await prisma.agendamento.update({where:{ id },
            data: {dataAgenda, servicoId, postoId, telefone, email, bi}});
        if(!agendar) throw new Error("Erro  ao atualizar o agendamento");
        return agendar;        
    }
}

export {AtualizarAgendamentoUseCase}