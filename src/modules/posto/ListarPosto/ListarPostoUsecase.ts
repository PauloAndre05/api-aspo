import { Posto } from "@prisma/client";
import { prisma } from "../../../prisma/client";

class ListarPostoUseCase{
    async execute(): Promise<Posto[]>{
        const postList = await prisma.posto.findMany();
        if(!postList) throw new Error("Erro ao Consultar o Posto");
        return postList
    }
}

export { ListarPostoUseCase }