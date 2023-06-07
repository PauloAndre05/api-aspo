import { Servico } from "@prisma/client";
import { prisma } from "../../../prisma/client";
import { RequestError } from "../../../appErrors/ErrorApi";

class ListarServicoUseCase{
    async execute(): Promise<Servico[]>{
        const listarServico = await prisma.servico.findMany();
        if(!listarServico) throw new RequestError("Erro ao Listar os Servicos");
        return listarServico;
    }
}

export { ListarServicoUseCase }