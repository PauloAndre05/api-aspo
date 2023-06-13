import { Router } from "express";
import { CriarHorarioController } from "../modules/horario/criarHorario/CriarHorarioController";
import { ListarHorarioController } from "../modules/horario/listarHorario/ListarHorarioController";

export const horaRouter = Router()

const criarHora = new CriarHorarioController()
const litarHora = new ListarHorarioController()

horaRouter.post("/", criarHora.handle)
horaRouter.get("/", litarHora.handle)