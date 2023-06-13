import { Posto } from "@prisma/client";
import { prisma } from "../../../prisma/client";
import { RequestError } from "../../../appErrors/ErrorApi";

class ListarPostoUseCase {
    async execute(): Promise<Posto[]> {
        const postList = await prisma.posto.findMany({
            include: {
                Agendamento: true,
            }
        });
        if (!postList) throw new RequestError("Erro ao Consultar o Posto");
        return postList
    }
}

export { ListarPostoUseCase }