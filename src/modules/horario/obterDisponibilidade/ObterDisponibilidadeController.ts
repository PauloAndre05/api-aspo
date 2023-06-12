import { Response, Request } from "express";
import { ObterDisponibilidadeUseCase } from "./ObterDisponibilidadeUseCase";

class ObterDisponibilidadeController {
    constructor(private obterDisponibilidadeUseCase: ObterDisponibilidadeUseCase) {}

    async handle(req: Request, res: Response){
        const { horaId } = req.params
        const { postoId, dataAgenda } = req.body

        const disponibilidade = await this.obterDisponibilidadeUseCase.execute({ postoId, dataAgenda, horaId });
        return res.status(200).json({ disponivel: disponibilidade });
    }
}