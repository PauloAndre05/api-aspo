import { Router } from "express";
import { CriarPostoController } from "../modules/posto/CriarPosto/CriarPostoController";
import { ListarPostoController } from "../modules/posto/ListarPosto/ListarPostoController";
import { AtualizarPostoController } from "../modules/posto/AtualizarPosto/AtualizarPostoController";
import { EliminarPostoController } from "../modules/posto/EliminarPosto/EliminarPostoContoller";


const postoRouter = Router();
const criarPosto = new CriarPostoController();
const listarPosto = new ListarPostoController();
const eliminarPosto = new EliminarPostoController();
const atualizarPosto = new AtualizarPostoController();

postoRouter.post("/", criarPosto.handle);
postoRouter.get("/", listarPosto.handle);
postoRouter.post("/atualizar/:id", atualizarPosto.handle);
postoRouter.delete("/:id", eliminarPosto.handle);

export { postoRouter }