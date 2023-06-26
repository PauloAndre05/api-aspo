import { Router } from "express";
import { CriarCanceladoControler } from "../modules/cancelado/criarCancelado/CriarCanceladoControler";
import { ListarCanceladoControler } from "../modules/cancelado/listarCancelado/ListarCanceladoControler";
import { ListarCanceladoPorPostoIdControler } from "../modules/cancelado/listarCanceladoPorPostoId/ListarCanceladoPorPostoIdControler";

export const canceladoRouter = Router()

const criarCancelado = new CriarCanceladoControler()
const listarCancelado = new ListarCanceladoControler()
const listarCanceladoPorPostoId =new ListarCanceladoPorPostoIdControler()

canceladoRouter.post("/", criarCancelado.handle)
canceladoRouter.get("/", listarCancelado.handle)
canceladoRouter.get("/posto/:postoId", listarCanceladoPorPostoId.handle)