import { Servico } from "@prisma/client";
import { prisma } from "../../../prisma/client";
import { RequestError } from "../../../appErrors/ErrorApi";

class CriarServicoUseCase{
    async execute({id, nome, descricao, createdAt}: Servico): Promise<Servico>{
        const service = await prisma.servico.create({data: {id, nome, descricao, createdAt}});
        if(!service) throw new RequestError("Erro ao criar Serviço");
        return service;
    }
}

export { CriarServicoUseCase }