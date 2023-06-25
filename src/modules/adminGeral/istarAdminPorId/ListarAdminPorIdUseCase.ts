import { UserAdminGeral } from "@prisma/client";
import { prisma } from "../../../prisma/client";
import { RequestError } from "../../../appErrors/ErrorApi";

export class ListarAdminPorIdUseCase {
    async execute( id: string ): Promise<UserAdminGeral>{
        const listarAdmin = await prisma.userAdminGeral.findUnique({
            where:{
                id
            }
        })
        if(!listarAdmin) throw new RequestError("Administrador não encontrado")
        return listarAdmin
    }
}