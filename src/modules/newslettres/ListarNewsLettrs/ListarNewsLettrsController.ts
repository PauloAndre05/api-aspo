import { Request, Response } from "express";
import { ListarNewsLettrsUseCase } from "./ListarNewsLettrsUseCase";

class ListarNewsLettrsController{
    async handle(req: Request, res: Response){
        const list = new ListarNewsLettrsUseCase();
        const listarNewsLettrs = await list.execute();
        return res.status(201).json(listarNewsLettrs);

    }
}

export { ListarNewsLettrsController }