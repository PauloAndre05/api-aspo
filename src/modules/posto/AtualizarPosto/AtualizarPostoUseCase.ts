import { Posto } from "@prisma/client";
import { prisma } from "../../../prisma/clint";

class AtualizarPostoUseCase{
    async execute({id, nome, local, cordenadas}: Posto): Promise<Posto>{
        const ifExiste = await prisma.posto.findUnique({where: {id}});
        if(!ifExiste) throw new Error("Posto não existe");
        const atualizar = await prisma.posto.update({where: {id},
        data: {nome, local, cordenadas}});
        return atualizar
    }
}

export { AtualizarPostoUseCase }