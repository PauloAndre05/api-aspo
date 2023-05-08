import { identificacao } from "@prisma/client";
import { prisma } from "../../../prisma/clint";

class IdentificacaoUseCase{
    async execute({ BI, nome, dataDeNascimento }: identificacao): Promise<identificacao>{
        const criarIdentificacao = await prisma.identificacao.create({data: {BI, nome, dataDeNascimento}});
        if(!criarIdentificacao) throw new Error("Erro ao fazer a identificação");
        return criarIdentificacao;
    }
}

export default IdentificacaoUseCase;