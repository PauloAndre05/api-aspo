import { Router } from "express";
import { criarAgendamentoController } from "../modules/agendamento/useCases/CriarAgendamento";
import { eliminarAgendamentoController } from "../modules/agendamento/useCases/EliminarAgendamento";
import { listarAgendamentoController } from "../modules/agendamento/useCases/ListarAgendamento";
import { ListarAgendamentoByIdController } from "../modules/agendamento/useCases/LIstarAgendamentoById/ListarAgendamentoByIdController";

const listarAgendamentoById = new ListarAgendamentoByIdController()
const agendamentosRouter = Router();

agendamentosRouter.get("/:id", listarAgendamentoById.handle)

agendamentosRouter.post("/", (req, res) => {
    return criarAgendamentoController.handle(req, res)
});

agendamentosRouter.get("/", (req, res) => {
    return listarAgendamentoController.handle(req, res)
});

agendamentosRouter.delete("/eliminar/:id", (req, res) => {
    return eliminarAgendamentoController.handle(req, res);
});
export {agendamentosRouter}