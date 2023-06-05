import { Posto } from "@prisma/client";
import { prisma } from "../../../prisma/clint";
import { RequestError } from "../../../appErrors/ErrorApi";

class AtualizarPostoUseCase{
    async execute({id, nome, local, cordenadas}: Posto): Promise<Posto>{
        const ifExiste = await prisma.posto.findUnique({where: {id}});
        if(!ifExiste) throw new RequestError("Posto não existe");
        const atualizar = await prisma.posto.update({where: {id},
        data: {nome, local, cordenadas}});
        return atualizar
    }
}

export { AtualizarPostoUseCase }