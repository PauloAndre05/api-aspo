import { Router } from "express";
import { CriarCanceladoControler } from "../modules/cancelado/criarCancelado/CriarCanceladoControler";
import { ListarCanceladoControler } from "../modules/cancelado/listarCancelado/ListarCanceladoControler";

export const canceladoRouter = Router()

const criarCancelado = new CriarCanceladoControler()
const listarCancelado = new ListarCanceladoControler()

canceladoRouter.post("/", criarCancelado.handle)
canceladoRouter.get("/", listarCancelado.handle)