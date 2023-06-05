import { Posto } from "@prisma/client";
import { prisma } from "../../../prisma/clint";

class EliminarPostoUseCase{
    async execute({id}: any): Promise<Posto>{
        const ifBiexist = await prisma.posto.findUnique({where: { id}});
        if(!ifBiexist) throw new Error("Erro não existe posto");
        const eliminar = await prisma.posto.delete({where: {id}});
        return eliminar
    }
}

export { EliminarPostoUseCase }