import { Agendamento } from "@prisma/client";
import {prisma } from "..//..//..//prisma/clint";

class AgendamentoUseCase{
    async execute({ dataAgenda, servicoId, postoId, telefone, email}: Agendamento): Promise<Agendamento>{
        const agendar = await prisma.agendamento.create({data: {dataAgenda, servicoId, postoId, telefone, email}})
        if(!agendar) throw new Error("Erro ao criar o Agendamento");
        return agendar;
        
    }
}

export {AgendamentoUseCase}