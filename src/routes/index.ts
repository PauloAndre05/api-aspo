import { response, Router } from "express";
import  express from "express";   
import { agendamentosRouter } from "./agendamento.routes";
import { postoRouter } from "./posto.routes";
import { servicoRouter } from "./servico.routes";
import { usuarioRouter } from "./usuario.routes";

const routes = Router();

routes.use("/agendamento", agendamentosRouter)
routes.use("/posto", postoRouter)
routes.use("/servico", servicoRouter)
routes.use("/usuario", usuarioRouter)
export {routes}