import { newslettrs } from "@prisma/client";
import { prisma } from "../../../prisma/client";
import { RequestError } from "../../../appErrors/ErrorApi";

class ListarNewsLettrsUseCase{
    async execute(): Promise<newslettrs[]>{
        const listarNewsLettrs = await prisma.newslettrs.findMany();
        if(!listarNewsLettrs) throw new RequestError("Erro ao listar os newslettrs");
        return listarNewsLettrs;
    }
}

export { ListarNewsLettrsUseCase }