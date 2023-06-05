import { Users} from "@prisma/client";
import { prisma } from "../../../prisma/clint";

class AtualizarUsuarioUseCase{
    async execute({id, nome, email, senha, cargo}: Users): Promise<Users>{
        const ifExiste = await prisma.users.findUnique({where: {id}});
        if(!ifExiste) throw new Error("O Usuario não encontrado");
        const user = await prisma.users.update({where: {id}, data: {id, nome, email, senha, cargo}});
        return user
    }
}

export { AtualizarUsuarioUseCase}