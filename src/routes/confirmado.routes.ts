import { Router } from "express";
import { CriarConfirmadoControler } from "../modules/confirmado/criarConfirmado/CriarConfirmadoControler";
import { ListarConfirmadoControler } from "../modules/confirmado/listarConfirmado/ListarConfirmadoControler";
import { ListarConfirmadoPorPostoControler } from "../modules/confirmado/listarConfirmadoPorPosto/ListarConfirmadoPorPostoControler";

export const confirmadoRouter = Router()

const criarConfirmado = new CriarConfirmadoControler()
const listarConfirmado = new ListarConfirmadoControler()
const listarConfirmadoPorPosto = new ListarConfirmadoPorPostoControler()



confirmadoRouter.post("/", criarConfirmado.handle)
confirmadoRouter.get("/", listarConfirmado.handle)
confirmadoRouter.get("posto/:postoId", listarConfirmadoPorPosto.handle)