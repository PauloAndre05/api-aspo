import { Confirmado } from "@prisma/client"
import { prisma } from "../../../prisma/client"
import { ICriarCanceladoDTO } from "../../cancelado/dtos"
import { RequestError } from "../../../appErrors/ErrorApi"

export class CriarConfirmadoUseCase {
        async execute( { id, dataAgenda, servicoId, postoId, telefone, email, bi, horaId, nome, comprovativo }: ICriarCanceladoDTO): Promise<Confirmado>{
            const confirmado = await prisma.confirmado.create({
                
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
            
            if(!confirmado || !confirmado.id) throw new RequestError("Erro ao criar confirmados")
    
            return confirmado
        }
    }