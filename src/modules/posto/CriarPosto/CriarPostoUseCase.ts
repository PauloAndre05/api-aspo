import { Posto } from "@prisma/client";
import { prisma } from "../../../prisma/client";
import { RequestError } from "../../../appErrors/ErrorApi";

class CriarPostoUseCase{
    async execute({id, nome, local, cordenadas, limiteDiario}:Posto): Promise<Posto>{
        const posto = await prisma.posto.create({data: {id, nome, local, cordenadas, limiteDiario}});
        if(!posto) throw new RequestError("Erro ao criar o Posto");
        return posto
    }
}

export { CriarPostoUseCase }