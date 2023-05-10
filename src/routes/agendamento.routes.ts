import { Router } from "express";
import { AgendamentoController } from "../modules/agendamento/CriarAgendamento/AgendamentoController";
import { ListarAgendamentoController } from "../modules/agendamento/ListarAgendamento/ListarAgendamentoController";
import { EliminarAgendamentoController } from "../modules/agendamento/EliminarAgendamento/EliminarAgendamentoController";
import { AtualizarAgendamentoController } from "../modules/agendamento/AtualizarAgendamento/AtualizarAgendamentoController";

const agendamentosRouter = Router();
const criarAgendamento = new AgendamentoController();
const listAgendamento = new ListarAgendamentoController();
const eliminar = new EliminarAgendamentoController();
const atualizarAgendamento = new AtualizarAgendamentoController();

agendamentosRouter.post("/", criarAgendamento.handle)

agendamentosRouter.get("/", listAgendamento.handle);
agendamentosRouter.post("/atualizar/:id", atualizarAgendamento.handle);
agendamentosRouter.delete("/:id", eliminar.handle);
export {agendamentosRouter}