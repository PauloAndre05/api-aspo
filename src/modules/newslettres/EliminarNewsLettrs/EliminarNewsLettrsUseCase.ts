import { newslettrs } from "@prisma/client";
import { prisma } from "../../../prisma/clint";
import { RequestError } from "../../../appErrors/ErrorApi";

class EliminarNewsLettrsUseCase{
    async execute({id}: any): Promise<newslettrs>{
        const ifEsxists = await prisma.newslettrs.findUnique({where: {id}});
        if(!ifEsxists)throw new RequestError("Erro o id não existe"); 
        const eliminar = await prisma.newslettrs.delete({where: {id}});
        if(!eliminar)throw new RequestError("Erro ao eliminar");
        return eliminar;
    }
}

export { EliminarNewsLettrsUseCase }