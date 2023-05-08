import { Servico } from "@prisma/client";
import { prisma } from "./../../../prisma/clint";

class CriarServicoUseCase{
    async execute({id, nome, createdAt}: Servico): Promise<Servico>{
        const service = await prisma.servico.create({data: {id, nome, createdAt}});
        if(!service) throw new Error("Erro ao criar Serviço");
        return service;
    }
}

export { CriarServicoUseCase }