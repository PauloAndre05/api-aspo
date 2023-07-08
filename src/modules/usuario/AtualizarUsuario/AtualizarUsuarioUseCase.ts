import { Users} from "@prisma/client";
import { MailService } from "../../../config/Mail/MailService";
import { hash } from "bcrypt";
import { prisma } from "../../../prisma/client";
import { RequestError } from "../../../appErrors/ErrorApi";

class AtualizarUsuarioUseCase{
    async execute({id, nome, email, senha, postoId}: Users): Promise<Users>{
        const ifExiste = await prisma.users.findUnique({
            where:{
                id
            }
        });

        if(!ifExiste) throw new RequestError("O Usuario não encontrado");        
        const senhaAlreadExists = ifExiste?.senha === senha ? true : false

        const hashedSenha = senhaAlreadExists ? ifExiste?.senha :  await hash(senha, 6) 

        const user = await prisma.users.update({
            where:{
                id
            }, 
            data:{
                id, 
                nome, 
                email, 
                postoId,
                senha: hashedSenha
            }
        });
        return user
    }
}

export { AtualizarUsuarioUseCase}