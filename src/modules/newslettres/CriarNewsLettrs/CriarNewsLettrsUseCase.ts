import { newslettrs } from "@prisma/client";
import { prisma } from "../../../prisma/client"
import { RequestError } from "../../../appErrors/ErrorApi";

class CriarNewsLettrsUseCase{
    async execute({id, nome, email, mensagem}: newslettrs): Promise<newslettrs>{
        const criar = await prisma.newslettrs.create( { data: {nome, email, mensagem} } );
        if(!criar) throw new RequestError("Erro ao criar NewsLettrs");
        return criar;
    }
}

export { CriarNewsLettrsUseCase }