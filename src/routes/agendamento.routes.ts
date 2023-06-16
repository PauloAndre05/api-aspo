import { Router } from "express";
import { criarAgendamentoController } from "../modules/agendamento/useCases/CriarAgendamento";
import { eliminarAgendamentoController } from "../modules/agendamento/useCases/EliminarAgendamento";
import { listarAgendamentoController } from "../modules/agendamento/useCases/ListarAgendamento";
import { ListarAgendamentoByIdController } from "../modules/agendamento/useCases/LIstarAgendamentoById/ListarAgendamentoByIdController";
import { ListarAgendamentoPorPostoController } from "../modules/agendamento/useCases/ListarAgendamentoPorPosto/ListarAgendamentoPorPostoController";
import { ListarAgendamentoPorBiController } from "../modules/agendamento/useCases/ListarAgendamentoPorBI/ListarAgendamentoPorBiController";

const listarAgendamentoById = new ListarAgendamentoByIdController()
const listarAgendamentoPorPosto = new ListarAgendamentoPorPostoController()
const listarAgendamentoPorBI = new ListarAgendamentoPorBiController()
const agendamentosRouter = Router();

agendamentosRouter.get("/:id", listarAgendamentoById.handle)

agendamentosRouter.get("/bilhete/:bi", listarAgendamentoPorBI.handle)

agendamentosRouter.post("/", (req, res) => {
    return criarAgendamentoController.handle(req, res)
});

agendamentosRouter.get("/", (req, res) => {
    return listarAgendamentoController.handle(req, res)
});

agendamentosRouter.get("/posto/:postoId", listarAgendamentoPorPosto.handle)

agendamentosRouter.delete("/eliminar/:id", (req, res) => {
    return eliminarAgendamentoController.handle(req, res);
});
export {agendamentosRouter}