import { Users} from "@prisma/client";
import { MailService } from "../../../config/Mail/MailService";
import { prisma } from "../../../prisma/client";
import { RequestError } from "../../../appErrors/ErrorApi";

class AtualizarUsuarioUseCase{
    async execute({id, nome, email, senha, postoId}: Users): Promise<Users>{
        const ifExiste = await prisma.users.findUnique({where: {id}});
        if(!ifExiste) throw new RequestError("O Usuario não encontrado");

       /*  if(ifExiste.estado == "DESATIVADO"){
            MailService.sendSolicitationResponse({
                to: ifExiste.email,
                from: "<ASPO onlineaspo@gmail.com>",
                subject: "Confirmação de Solicitação",
                body: `Olá ${ifExiste.nome}, Bem vindo ao ASPO, o seu cadastro foi aprovado com sucesso! 
                A sua conta já se encontra activa. Já pode fazer o login no ASPOadmin`
            })
        } */

        const user = await prisma.users.update({where: {id}, data: {id, nome, email, senha}});
        return user
    }
}

export { AtualizarUsuarioUseCase}