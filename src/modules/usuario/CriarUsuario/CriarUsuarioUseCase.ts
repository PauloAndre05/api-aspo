
import { prisma } from "../../../prisma/client";
import { hash } from "bcrypt";
import { Users } from "@prisma/client";
import { RequestError } from "../../../appErrors/ErrorApi";


class CriarUsuarioUseCase {
    async execute({ id, nome, email, senha,  postoId }: Users ): Promise<Users>{
      const existeEmail = await prisma.users.findUnique({ where: { email } });
      if (existeEmail) throw new RequestError("Email já existe");
      
      const hashedSenha = await hash(senha, 10);
  
      const criarUsuario = await prisma.users.create({
        data: {
          id,
          nome,
          email,
          senha: hashedSenha,
          postoId,
        },
      });
  
      if (!criarUsuario) throw new Error("Erro ao criar usuário");
  
      return criarUsuario;
    }
  }

export {CriarUsuarioUseCase}