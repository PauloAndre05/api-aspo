import { identificacao } from "@prisma/client";
import { prisma } from "..//..//..//prisma/clint";

class ListarIdentificacaoUseCase{
    async execute(): Promise<identificacao[]>{
        const lista = await prisma.identificacao.findMany();
        if(!lista) throw new Error("Erro ao listar a identificação");
        return lista;
    }
}

export  { ListarIdentificacaoUseCase }