import { Cancelado } from "@prisma/client"
import { prisma } from "../../../prisma/client"
import { RequestError } from "../../../appErrors/ErrorApi"
import { ICriarCanceladoDTO } from "../dtos"

export class CriarCanceladoUseCase{
    async execute({  id, dataAgenda, servicoId, postoId, telefone, email, bi, horaId, nome, comprovativo }: ICriarCanceladoDTO): Promise<Cancelado>{
        const cancelado = await prisma.cancelado.create({
            
            data:{
                id,
                dataAgenda, 
                servicoId, 
                postoId, 
                telefone, 
                email, 
                bi, 
                horaId, 
                nome, 
                comprovativo
            }
        })  
        
        if(!cancelado || !cancelado.id) throw new RequestError("Erro ao criar cancelados")

        return cancelado
    }
}