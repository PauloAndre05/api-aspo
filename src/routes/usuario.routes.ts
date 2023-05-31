import { Router } from "express";
import { CriarUsuarioController } from "../modules/usuario/CriarUsuario/CriarUsuarioController";
import { ListarUsuarioController } from "../modules/usuario/ListarUsuario/ListarUsuarioController";
import { AtualizarUsuarioController } from "../modules/usuario/AtualizarUsuario/AtualizarUsuarioController";


const usuarioRouter = Router()

const criarUsuario = new CriarUsuarioController()
const atualizarUsuario = new AtualizarUsuarioController()
const ListarUsuario = new ListarUsuarioController()

usuarioRouter.post("/", criarUsuario.handle)
usuarioRouter.get("/", ListarUsuario.handle)
usuarioRouter.put("/", atualizarUsuario.handle)

export {usuarioRouter }