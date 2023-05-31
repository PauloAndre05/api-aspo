import { Users } from "@prisma/client";
import { prisma } from "../../../prisma/clint";


class CriarUsuarioUseCase{
    async execute( {id, nome, utilizador, senha, cargo}:Users ): Promise<Users>{
       const criarUsuario = await prisma.users.create({data: {id, nome, utilizador, senha, cargo}})
        if(!criarUsuario) throw new Error("Erro ao criar usuario")
        return criarUsuario
    }
}

export {CriarUsuarioUseCase}