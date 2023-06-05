import { AgendamentoRepository } from "../../repositories/implementation/AgendamentoRepository";
import { EliminarAgendamentoController } from "./EliminarAgendamentoController";
import { EliminarAgendamentoUseCase } from "./EliminarAgendamentoUseCase";

const agendamentoRepository = new AgendamentoRepository();
const eliminarAgendamentoUseCase = new EliminarAgendamentoUseCase(agendamentoRepository);
const eliminarAgendamentoController = new EliminarAgendamentoController(eliminarAgendamentoUseCase);

export { eliminarAgendamentoController }