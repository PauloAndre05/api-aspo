import { Router } from "express";
import { CriarServicoController } from "../modules/servico/CriarServico/CriarServicoController";
import { ListarServicoController} from "../modules/servico/ListarServico/ListarServicoController";
import { EliminarServicoController } from "../modules/servico/EliminarServico/EliminarServicoController";
import { AtualizarServicoController } from "../modules/servico/AtualizarServico/AtualizarServicoController";

const servicoRouter = Router();
const criarServico = new CriarServicoController();
const listarServico = new ListarServicoController();
const eliminarServico = new EliminarServicoController();
const atualizarServico = new AtualizarServicoController();

servicoRouter.post("/", criarServico.handle);
servicoRouter.get("/listarServico", listarServico.handle);
servicoRouter.get("/atualizarServico", atualizarServico.handle);
servicoRouter.delete("/eliminarServico", eliminarServico.handle);

export { servicoRouter }