import { Posto } from "@prisma/client";
import { prisma } from "../../../prisma/client";
import { RequestError } from "../../../appErrors/ErrorApi";

class AtualizarPostoUseCase{
    async execute({id, nome, local, cordenadas, limiteDiario}: Posto): Promise<Posto>{
        const ifExiste = await prisma.posto.findUnique({where: {id}});
        if(!ifExiste) throw new RequestError("Posto não existe");
        const atualizar = await prisma.posto.update({where: {id},
        data: {nome, local, cordenadas, limiteDiario}});
        return atualizar
    }
}

export { AtualizarPostoUseCase }