import { Users } from "@prisma/client";
import { prisma } from "../../../prisma/client";

class ListarUsuarioUseCase {
    async execute(id: string): Promise<Users> {
        const lista = await prisma.users.findFirst({
            where: {
                id: id
            },
            include: {
                posto: true
            }
        });
        if (!lista) throw new Error("Erro ao listar a usuario");
        return lista;
    }
}

export { ListarUsuarioUseCase }