import { Users} from "@prisma/client";
import { MailService } from "../../../config/Mail/MailService";
import { prisma } from "../../../prisma/client";

class AtualizarUsuarioUseCase{
    async execute({id, nome, email, senha, postoId, tipo, estado}: Users): Promise<Users>{
        const ifExiste = await prisma.users.findUnique({where: {id}});
        if(!ifExiste) throw new Error("O Usuario não encontrado");

        if(ifExiste.estado == "DESATIVADO"){
            MailService.sendSolicitationResponse({
                to: email,
                from: "onlineaspo@gmail.com",
                subject: "Confirmação de Solicitação",
                body: ""
            })
        }

        const user = await prisma.users.update({where: {id}, data: {id, nome, email, senha, estado}});
        return user
    }
}

export { AtualizarUsuarioUseCase}