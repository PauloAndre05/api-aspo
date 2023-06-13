import { Router } from "express";
import { CriarUsuarioController } from "../modules/usuario/CriarUsuario/CriarUsuarioController";
import { ListarUsuarioController } from "../modules/usuario/ListarUsuario/ListarUsuarioController";
import { AtualizarUsuarioController } from "../modules/usuario/AtualizarUsuario/AtualizarUsuarioController";
import { ListarUsuarioDesativadoController } from "../modules/usuario/ListarUsuarioDesativado/ListarUsuarioDesativadoController";


const usuarioRouter = Router()

const criarUsuario = new CriarUsuarioController()
const atualizarUsuario = new AtualizarUsuarioController()
const ListarUsuario = new ListarUsuarioController()
const ListarUsuarioDesativado = new ListarUsuarioDesativadoController()

usuarioRouter.post("/", criarUsuario.handle)
usuarioRouter.get("/", ListarUsuario.handle)
usuarioRouter.get("/Desativdos", ListarUsuarioDesativado.handle)
usuarioRouter.put("/:id", atualizarUsuario.handle)

export { usuarioRouter }