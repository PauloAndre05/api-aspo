import { Cancelado } from "@prisma/client";
import { prisma } from "../../../prisma/client";
import { RequestError } from "../../../appErrors/ErrorApi";
import { Request, Response } from "express";
import { CriarCanceladoUseCase } from "./CriarCanceladoUseCase";

export class CriarCanceladoControler{
    async handle (req: Request, res: Response){
        const {  id, dataAgenda, servicoId, postoId, telefone, email, bi, horaId, nome, comprovativo } = req.body
        const criarCancelado = new CriarCanceladoUseCase()
        const cancelado = await criarCancelado.execute({
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

        return res.status(200).json(cancelado)
    }
}