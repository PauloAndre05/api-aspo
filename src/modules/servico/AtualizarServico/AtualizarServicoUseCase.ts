import { Servico } from "@prisma/client";
import { prisma } from "../../../prisma/client";

class AtualizarServicoUseCase{
    async execute({id, nome, descricao, createdAt}: any): Promise<Servico>{
        const ifExiste = await prisma.servico.findUnique({where: {id}});
        if(!ifExiste) throw new Error("Serviço não existe");
        const atualizar = await prisma.servico.update({where: {id}, 
            data:{nome, descricao}});
            return atualizar
    }
}

export { AtualizarServicoUseCase }