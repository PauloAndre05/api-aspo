import { Router } from "express";
import { CriarPostoController } from "../modules/posto/CriarPosto/CriarPostoController";
import { ListarPostoController } from "../modules/posto/ListarPosto/ListarPostoController";
import { AtualizarPostoController } from "../modules/posto/AtualizarPosto/AtualizarPostoController";
import { EliminarPostoController } from "../modules/posto/EliminarPosto/EliminarPostoContoller";
import { ObterHorariosDisponiveisController } from "../modules/posto/obterHorariosDisponiveis/ObterDisponibilidadeController";
import { ObterHorariosDisponiveisUseCase } from "../modules/posto/obterHorariosDisponiveis/ObterDisponibilidadeUseCase";
import { AgendamentoRepository } from "../modules/agendamento/repositories/implementation/AgendamentoRepository";
import { ListarPostoPorPostoIdControler } from "../modules/posto/listarPostoPorPostoId/ListarPostoPorPostoIdControler";


const postoRouter = Router();
const criarPosto = new CriarPostoController();
const listarPosto = new ListarPostoController();
const eliminarPosto = new EliminarPostoController();
const atualizarPosto = new AtualizarPostoController();
const horariosDisponiveis = new ObterHorariosDisponiveisController();
const listarPostoPorPostoId = new ListarPostoPorPostoIdControler()

postoRouter.post("/", criarPosto.handle);
postoRouter.get("/", listarPosto.handle);
postoRouter.get("/:postoId/:dataAgenda", horariosDisponiveis.handle)
postoRouter.put("/atualizar/:id", atualizarPosto.handle);
postoRouter.delete("/:id", eliminarPosto.handle);
postoRouter.get("/:postoId", listarPostoPorPostoId.handle)
export { postoRouter }