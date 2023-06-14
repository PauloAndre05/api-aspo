import { Router } from "express";
import { CriarUsuarioController } from "../modules/usuario/CriarUsuario/CriarUsuarioController";
import { ListarUsuarioController } from "../modules/usuario/ListarUsuario/ListarUsuarioController";
import { AtualizarUsuarioController } from "../modules/usuario/AtualizarUsuario/AtualizarUsuarioController";
import { ListarUsuarioDesativadoController } from "../modules/usuario/ListarUsuarioDesativado/ListarUsuarioDesativadoController";
import { ListarUsuarioByIdController } from "../modules/usuario/ListarUsuarioById/ListarUsuarioController";


const usuarioRouter = Router()

const criarUsuario = new CriarUsuarioController()
const atualizarUsuario = new AtualizarUsuarioController()
const ListarUsuario = new ListarUsuarioController()
const ListarUsuarioDesativado = new ListarUsuarioDesativadoController()
const ListarUsuarioById = new ListarUsuarioByIdController()

usuarioRouter.post("/", criarUsuario.handle)
usuarioRouter.get("/", ListarUsuario.handle)
usuarioRouter.get("/:id", ListarUsuarioById.handle)
usuarioRouter.get("/Desativdos", ListarUsuarioDesativado.handle)
usuarioRouter.put("/:id", atualizarUsuario.handle)

export { usuarioRouter }