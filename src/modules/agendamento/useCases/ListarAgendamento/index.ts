import { AgendamentoRepository } from "../../repositories/implementation/AgendamentoRepository";
import { ListarAgendamentoController } from "./ListarAgendamentoController";
import { ListarAgendamentoUseCase } from "./ListarAgendamentoUseCase";

const agendamentoRepository = new AgendamentoRepository();
const listarAgendamentoUseCase = new ListarAgendamentoUseCase(agendamentoRepository);
const listarAgendamentoController = new ListarAgendamentoController(listarAgendamentoUseCase);

export { listarAgendamentoController }