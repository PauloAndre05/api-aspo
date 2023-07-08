import { Router } from "express";
import { CriarAdminGeralControler } from "../modules/adminGeral/criarAdminGeral/CriarAdminGeralControler";
import { ListarAdminGeralControler } from "../modules/adminGeral/listarAdminGeral/ListarAdminGeralControler";
import { ListarAdminPorIdControler } from "../modules/adminGeral/istarAdminPorId/ListarAdminPorIdControler";
import { ActualizarControlor } from "../modules/adminGeral/actualizar/ActualizarControlor";


export const adminGeralRouter = Router()
const criarAdmin = new CriarAdminGeralControler()
const listarAdmin = new ListarAdminGeralControler()
const listarAdminPorId = new ListarAdminPorIdControler()
const actualizarAdmin = new ActualizarControlor()

adminGeralRouter.post("/", criarAdmin.handle)
adminGeralRouter.get("/", listarAdmin.handle)
adminGeralRouter.get("/:id", listarAdminPorId.handle)
adminGeralRouter.put("/:id", actualizarAdmin.handle)