import {Request, Response} from "express"
import IdentificacaoUseCase from "./IdentificacaoUseCase"

class IdentificacaoController {
    async handle (req: Request, res: Response){
        const { BI, nome, dataDeNascimento } = req.body
        const criarID = new IdentificacaoUseCase()

        const Id = await criarID.execute( { BI, nome, dataDeNascimento } )
        return res.status(201).json(Id)
        
    }
}

export { IdentificacaoController }