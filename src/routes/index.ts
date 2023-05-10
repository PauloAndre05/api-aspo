import { response, Router } from "express";
import  express from "express";   
import { agendamentosRouter } from "./agendamento.routes";
import { identificacaoRouter } from "./identificacao.routes";
import { postoRouter } from "./posto.routes";
import { servicoRouter } from "./servico.routes";

const routes = Router();

routes.use("/agendamento", agendamentosRouter)
routes.use("/identificacao", identificacaoRouter)
routes.use("/posto", postoRouter)
routes.use("/servico", servicoRouter)
export {routes}