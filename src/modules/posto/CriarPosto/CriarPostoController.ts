import { Request, Response } from "express";
import { CriarPostoUseCase } from "./CriarPostoUseCase";

class CriarPostoController{
    async handle(req: Request ,res: Response){
        const {id, nome, local, cordenadas} = req.body;
        const posto = new CriarPostoUseCase();
        const PostoFinal = await posto.execute({id, nome, local, cordenadas});
        return res.status(201).json(PostoFinal)
    }
}

export  { CriarPostoController }

