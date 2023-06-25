import { Router } from "express";
import { CriarAdminGeralControler } from "../modules/adminGeral/criarAdminGeral/CriarAdminGeralControler";
import { ListarAdminGeralControler } from "../modules/adminGeral/listarAdminGeral/ListarAdminGeralControler";
import { ListarAdminPorIdControler } from "../modules/adminGeral/istarAdminPorId/ListarAdminPorIdControler";


export const adminGeralRouter = Router()
const criarAdmin = new CriarAdminGeralControler()
const listarAdmin = new ListarAdminGeralControler()
const listarAdminPorId = new ListarAdminPorIdControler()

adminGeralRouter.post("/", criarAdmin.handle)
adminGeralRouter.get("/", listarAdmin.handle)
adminGeralRouter.get("/:id", listarAdminPorId.handle)