import { Posto } from "@prisma/client";
import { prisma } from "../../../prisma/clint";

class CriarPostoUseCase{
    async execute({id, nome, local, cordenadas}:Posto): Promise<Posto>{
        const posto = await prisma.posto.create({data: {id, nome, local, cordenadas}});
        if(!posto) throw new Error("Erro ao criar o Posto");
        return posto
    }
}

export { CriarPostoUseCase }