import { TipoUsuario, Users } from "@prisma/client";
import { prisma } from "../../../prisma/client";
import { hash } from "bcrypt";


class CriarUsuarioUseCase {
    async execute({ id, nome, email, senha, cargo, tipo:TipoUsuario, postoId }: Users): Promise<Users> {
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
          senha: hashedSenha,
          cargo,
          tipo: TipoUsuario,
          postoId,
        },
      });
  
      if (!criarUsuario) {
        throw new Error("Erro ao criar usuário");
      }
  
      return criarUsuario;
    }
  }

export {CriarUsuarioUseCase}