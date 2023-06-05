import { Router } from "express";
import { criarAgendamentoController } from "../modules/agendamento/useCases/CriarAgendamento";
import { eliminarAgendamentoController } from "../modules/agendamento/useCases/EliminarAgendamento";

const agendamentosRouter = Router();

agendamentosRouter.post("/", (req, res) => {
    return criarAgendamentoController.handle(req, res);
});

agendamentosRouter.get("/", (req, res) => {

});
agendamentosRouter.post("/atualizar/:id", (req, res) => {
    
});
agendamentosRouter.delete("/eliminar/:id", (req, res) => {
    return eliminarAgendamentoController.handle(req, res);
});
export {agendamentosRouter}