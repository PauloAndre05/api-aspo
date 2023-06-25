import { Request, Response } from "express"
import { CriarConfirmadoUseCase } from "./CriarConfirmadoUseCase"

export class CriarConfirmadoControler {
        async handle (req: Request, res: Response){
            const {  id, dataAgenda, servicoId, postoId, telefone, email, bi, horaId, nome, comprovativo } = req.body
            const criarConfirmado = new CriarConfirmadoUseCase()
            const confirmado = await criarConfirmado.execute({
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
            })
    
            return res.status(200).json(confirmado)
        }
    }
