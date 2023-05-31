import { Users } from "@prisma/client";
import { prisma } from "..//..//..//prisma/clint";

class ListarUsuarioUseCase{
    async execute(): Promise<Users[]>{
        const lista = await prisma.users.findMany();
        if(!lista) throw new Error("Erro ao listar a identificação");
        return lista;
    }
}

export  { ListarUsuarioUseCase }