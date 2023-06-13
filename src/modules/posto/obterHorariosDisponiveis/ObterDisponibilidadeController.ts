import { Response, Request } from "express";
import { ObterDisponibilidadeUseCase } from "./ObterDisponibilidadeUseCase";

export class ObterDisponibilidadeController {
    constructor(private obterDisponibilidadeUseCase: ObterDisponibilidadeUseCase) {}

    async handle(req: Request, res: Response){
        const { postoId, dataAgenda } = req.params
        
        return res.status(200).send();
    }
}