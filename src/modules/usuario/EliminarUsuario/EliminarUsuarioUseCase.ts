import { Users } from "@prisma/client";
import { prisma } from "../../../prisma/client";
import { RequestError } from "../../../appErrors/ErrorApi";

export class EliminarUsuarioUseCase{
    async execute({id}: any): Promise<Users>{
        const existUser = await prisma.users.findUnique({
            where:{
                id
            }
        })

        if(!existUser) throw new RequestError("Usuário não encontrado!")

        const deleteUser = await prisma.users.delete({
            where:{
                id
            }
        })
        
        return deleteUser
    }
}