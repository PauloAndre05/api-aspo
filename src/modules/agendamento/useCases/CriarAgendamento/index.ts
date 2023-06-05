import { AgendamentoRepository } from "../../repositories/implementation/AgendamentoRepository";
import { CriarAgendamentoController } from "./CriarAgendamentoController";
import { CriarAgendamentoUseCase } from "./CriarAgendamentoUseCase";

const agendamentoRepository = new AgendamentoRepository();
const criarAgendamentoUseCase = new CriarAgendamentoUseCase(agendamentoRepository);
const criarAgendamentoController = new CriarAgendamentoController(criarAgendamentoUseCase);

export { criarAgendamentoController };