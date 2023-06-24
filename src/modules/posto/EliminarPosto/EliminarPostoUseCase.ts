import { Posto } from "@prisma/client";
import { prisma } from "../../../prisma/client";
import { RequestError } from "../../../appErrors/ErrorApi";

class EliminarPostoUseCase{
    async execute(id: string): Promise<Posto>{
        console.log(id);
        
        const ifBiexist = await prisma.posto.findUnique({where: { id }});
        if(!ifBiexist) throw new RequestError("Erro não existe posto");
        const eliminar = await prisma.posto.delete({where: {id}});
        return eliminar
    }
}

export { EliminarPostoUseCase }