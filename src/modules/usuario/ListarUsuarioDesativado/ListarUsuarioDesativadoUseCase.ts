import { Users } from "@prisma/client";
import { prisma } from "../../../prisma/client";

class ListarUsuarioDesativadoUseCase {
    async execute(): Promise<Users[]> {
        const lista = await prisma.users.findMany({
            where: {
                estado: "DESATIVADO"
            },
            include: {
                posto: true
            }
        });
        if (!lista) throw new Error("Erro ao listar a usuarios desactivados");
        return lista;
    }
}

export { ListarUsuarioDesativadoUseCase }