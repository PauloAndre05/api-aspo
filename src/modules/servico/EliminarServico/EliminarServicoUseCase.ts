import { Servico } from "@prisma/client"
import { prisma } from "../../../prisma/clint"

class EliminarServicoUseCase{
    async execute({id}: any): Promise<Servico>{
        const ifExiste = await prisma.servico.findUnique({where: {id}});
        if(!ifExiste) throw new Error("O Serviço não Existe");
        const eliminar = await prisma.servico.delete({where: {id}});
        return eliminar
    }
}

export { EliminarServicoUseCase }