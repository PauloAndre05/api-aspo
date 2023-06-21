import { Users } from "@prisma/client";
import { prisma } from "../../../prisma/client";

class ListarUsuarioUseCase {
    async execute(): Promise<Users[]> {
        const lista = await prisma.users.findMany({
           /*  where: {
                tipo: "DEFAULT_USER",
                estado: "ACTIVADO",
            },  */
            include: {
                posto: true
            },

            orderBy: {
                nome: 'asc'
            }
        });
        if (!lista) throw new Error("Erro ao listar a identificação");
        return lista;
    }
}

export { ListarUsuarioUseCase }