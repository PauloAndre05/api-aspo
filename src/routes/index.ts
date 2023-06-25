import { response, Router } from "express";
import  express from "express";   
import { agendamentosRouter } from "./agendamento.routes";
import { postoRouter } from "./posto.routes";
import { servicoRouter } from "./servico.routes";
import { usuarioRouter } from "./usuario.routes";
import { newsleterRouter } from "./newslettrs.routes";
import { authRouter } from "./auth.routes";
import { horaRouter } from "./horario.routes";
import { adminGeralRouter } from "./adminGeral.routes";
import { authAdminGeralRouter } from "./authAdminGeral.routes";
import { canceladoRouter } from "./cancelado.routes";
import { confirmadoRouter } from "./confirmado.routes";

const routes = Router();

routes.use("/agendamento", agendamentosRouter)
routes.use("/posto", postoRouter)
routes.use("/servico", servicoRouter)
routes.use("/usuario", usuarioRouter)
routes.use("/newsleter", newsleterRouter)
routes.use("/adminGeral", adminGeralRouter)
routes.use("/login", authRouter)
routes.use("/loginAdminGeral", authAdminGeralRouter)
routes.use("/hora", horaRouter)
routes.use("/cancelado", canceladoRouter)
routes.use("/confirmado", confirmadoRouter)

export {routes}