import { Router } from "express";
import { IdentificacaoController } from "../modules/identificacao/criarIdentificacao/IdentificacaoController";
import { ListarIdentificacaoController } from "../modules/identificacao/listarIdentificacao/ListarIdentificaoController";
import { AtualizarIdentificaoController } from "../modules/identificacao/AtualizarIdentificacao/AtualizarIdentificacaoController";
import { EliminarIdentificacaoController } from "../modules/identificacao/EliminarIdentificacao/EliminarIdentificacaoController";


const identificacaoRouter = Router();
const criarIdentificacao = new IdentificacaoController();
const listarIdentificacaoController = new ListarIdentificacaoController();
const atualizarIdentificacao = new AtualizarIdentificaoController();
const eliminarIdentificacao = new EliminarIdentificacaoController();

identificacaoRouter.post("/", criarIdentificacao.handle);
identificacaoRouter.get("/", listarIdentificacaoController.handle);
identificacaoRouter.post("/atualizar/:BI", atualizarIdentificacao.handle)
identificacaoRouter.delete("/:BI", eliminarIdentificacao.handle)
export { identificacaoRouter }