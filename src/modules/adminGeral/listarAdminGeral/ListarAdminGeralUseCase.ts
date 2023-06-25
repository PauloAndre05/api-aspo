import { UserAdminGeral } from "@prisma/client";
import { prisma } from "../../../prisma/client";
import { RequestError } from "../../../appErrors/ErrorApi";

export class ListarAdminGeralUseCase {
    async execute(): Promise<UserAdminGeral[]>{
        const listarAdmin = await prisma.userAdminGeral.findMany()
        if(!listarAdmin) throw new RequestError("Ainda não cadastrou ninguem")
        return listarAdmin
    }
}