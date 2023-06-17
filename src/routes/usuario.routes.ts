import { Router } from "express";
import { CriarUsuarioController } from "../modules/usuario/CriarUsuario/CriarUsuarioController";
import { ListarUsuarioController } from "../modules/usuario/ListarUsuario/ListarUsuarioController";
import { AtualizarUsuarioController } from "../modules/usuario/AtualizarUsuario/AtualizarUsuarioController";
import { ListarUsuarioDesativadoController } from "../modules/usuario/ListarUsuarioDesativado/ListarUsuarioDesativadoController";
import { ListarUsuarioByIdController } from "../modules/usuario/ListarUsuarioById/ListarUsuarioController";
import { EliminarUsuarioController } from "../modules/usuario/EliminarUsuario/EliminarUsuarioController";


const usuarioRouter = Router()

const criarUsuario = new CriarUsuarioController()
const atualizarUsuario = new AtualizarUsuarioController()
const listarUsuario = new ListarUsuarioController()
const listarUsuarioDesativado = new ListarUsuarioDesativadoController()
const listarUsuarioById = new ListarUsuarioByIdController()
const eliminarUsuario = new EliminarUsuarioController()

usuarioRouter.post("/", criarUsuario.handle)
usuarioRouter.get("/listarTodos", listarUsuario.handle)
usuarioRouter.get("/:id", listarUsuarioById.handle)
usuarioRouter.get("/listarUsuario/desativados", listarUsuarioDesativado.handle)
usuarioRouter.put("/:id", atualizarUsuario.handle)
usuarioRouter.delete("/:id", eliminarUsuario.handle)

export { usuarioRouter }