import { UserAdminGeral } from "@prisma/client";
import { prisma } from "../../../prisma/client";
import { RequestError } from "../../../appErrors/ErrorApi";
import { compare, hash } from "bcrypt";

export class ActualizarUseCase {
  async execute ({
    id,
    nome,
    senha,
    email,
  }: UserAdminGeral): Promise<UserAdminGeral>{
    const isUser = await prisma.userAdminGeral.findUnique({
      where:{
        id
      }
    })

    if(!isUser) throw new RequestError("Usuário não encontrado!")
    const senhaAlreadExists = isUser?.senha === senha ? true : false

    const hashedSenha = senhaAlreadExists ? isUser?.senha :  await hash(senha, 6) 
    const user = await prisma.userAdminGeral.update({
      where:{
        id
      }, 
      data:{
        id, 
        nome, 
        email, 
        senha:hashedSenha
      }
    })
    return user
  }
}