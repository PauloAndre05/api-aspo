import { Agendamento } from "@prisma/client";
import {prisma } from "..//..//..//prisma/clint";

class AgendamentoUseCase{
    async execute({ dataAgenda, servicoId, postoId, telefone, email, bi}: Agendamento): Promise<Agendamento>{
        const ifBiexist = await prisma.identificacao.findUnique({where:{BI:bi}}) 
        if(!ifBiexist) throw new Error("BI inválido");
        const agendar = await prisma.agendamento.create({data: {dataAgenda, servicoId, postoId, telefone, email, bi}})
        if(!agendar) throw new Error("Erro ao criar o Agendamento");
        return agendar;
        
    }
}

export {AgendamentoUseCase}