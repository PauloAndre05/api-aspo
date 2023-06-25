import { UserAdminGeral } from "@prisma/client";
import { prisma } from "../../../prisma/client";
import { RequestError } from "../../../appErrors/ErrorApi";
import { hash } from "bcrypt";

export class CriarAdminGeralUseCase{
    async execute({id, nome, email, senha}: UserAdminGeral): Promise<UserAdminGeral>{
        const existUser = await prisma.userAdminGeral.findMany()
        if(existUser.length > 0) throw new RequestError("Já existe um administrador, impossível criar")

        const hashedSenha = await hash(senha, 10)
        const administradorGeral = await prisma.userAdminGeral.create({
            data:{
                id, 
                nome, 
                email,
                senha: hashedSenha,
            }   
        })

        if(!administradorGeral || !administradorGeral.id) throw new RequestError("Erro ao criar um administrador!!")

        return administradorGeral
    }
}