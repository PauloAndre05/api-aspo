import { Request, Response } from "express";
import { ListarPostoUseCase } from "./ListarPostoUsecase";

class ListarPostoController{
    async handle(req: Request, res: Response){
        const postList = new ListarPostoUseCase();
        const listarPost = await postList.execute();
        return res.status(201).json(listarPost);
    }
}

export  { ListarPostoController }