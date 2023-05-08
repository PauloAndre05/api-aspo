import { identificacao } from "@prisma/client";
import { prisma } from "../../../prisma/clint";

class EliminarIdentificacaoUseCase{
    async execute({BI}: any): Promise<identificacao>{
        const ifExiste = await prisma.identificacao.findUnique({where: {BI}});
        if(!ifExiste) throw new Error("O número de identificação não existe!");
        const id = await prisma.identificacao.delete({where: {BI}});
        return id
    }
}

export { EliminarIdentificacaoUseCase }