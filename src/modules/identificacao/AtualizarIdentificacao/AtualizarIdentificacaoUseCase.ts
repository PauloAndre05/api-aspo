import { identificacao } from "@prisma/client";
import { prisma } from "../../../prisma/clint";

class AtualizarIdentificaoUseCase{
    async execute({BI, nome, dataDeNascimento}: identificacao): Promise<identificacao>{
        const ifExiste = await prisma.identificacao.findUnique({where: {BI}});
        if(!ifExiste) throw new Error("O BI não existe");
        const id = await prisma.identificacao.update({
            where: {BI},
            data: {nome, dataDeNascimento, BI}});
            return id
    }
}

export { AtualizarIdentificaoUseCase}