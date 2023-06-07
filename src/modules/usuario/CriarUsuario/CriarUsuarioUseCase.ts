
import { prisma } from "../../../prisma/client";
import { hash } from "bcrypt";
import { MailService } from "../../../config/Mail/MailService";
import { Users } from "@prisma/client";


class CriarUsuarioUseCase {
    async execute({ id, nome, email, senha,  tipo,  postoId, estado }: Users ): Promise<Users>{
      const existeEmail = await prisma.users.findUnique({ where: { email } });
      if (existeEmail) {

        
        throw new Error("Email já existe");
      }
      
      const hashedSenha = await hash(senha, 10);
  
      const criarUsuario = await prisma.users.create({
        data: {
          id,
          nome,
          email,
          senha,
          tipo,
          postoId,
          estado
        },
      });
  
      if (!criarUsuario) {
        throw new Error("Erro ao criar usuário");
      }
  
      return criarUsuario;
    }
  }

export {CriarUsuarioUseCase}