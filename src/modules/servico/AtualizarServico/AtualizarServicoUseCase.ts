import { Servico } from "@prisma/client";
import { prisma } from "../../../prisma/client";
import { RequestError } from "../../../appErrors/ErrorApi";

class AtualizarServicoUseCase{
    async execute({id, nome, descricao, createdAt}: Servico): Promise<Servico>{
        const ifExiste = await prisma.servico.findUnique({where: {id}});
        if(!ifExiste) throw new RequestError("Serviço não existe");
        const atualizar = await prisma.servico.update({where: {id}, 
            data:{nome, descricao}});
            return atualizar
    }
}

export { AtualizarServicoUseCase }