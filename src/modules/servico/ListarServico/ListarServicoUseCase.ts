import { Servico } from "@prisma/client";
import { prisma } from "../../../prisma/clint";

class ListarServicoUseCase{
    async execute(): Promise<Servico[]>{
        const listarServico = await prisma.servico.findMany();
        if(!listarServico) throw new Error("Erro ao Listar os Servicos");
        return listarServico;
    }
}

export { ListarServicoUseCase }