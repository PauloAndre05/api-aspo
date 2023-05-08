import { Servico } from "@prisma/client";
import { prisma } from "../../../prisma/clint";

class AtualizarServicoUseCase{
    async execute({id, nome, createdAt}: any): Promise<Servico>{
        const ifExiste = await prisma.servico.findUnique({where: {id}});
        if(!ifExiste) throw new Error("Serviço não existe");
        const atualizar = await prisma.servico.update({where: {id}, 
            data:{nome}});
            return atualizar
    }
}

export { AtualizarServicoUseCase }