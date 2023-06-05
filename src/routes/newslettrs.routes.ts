import { Router } from "express";
import { CriarNewsLettrsController } from "../modules/newslettres/CriarNewsLettrs/CriarNewsLettrsController";
import { ListarNewsLettrsController } from "../modules/newslettres/ListarNewsLettrs/ListarNewsLettrsController";
import { EliminarNewsLettrsController } from "../modules/newslettres/EliminarNewsLettrs/EliminarNewsLettrsController";


const newsleterRouter = Router()


const criarNewsleter = new CriarNewsLettrsController()
const listarNewsleter = new ListarNewsLettrsController()
const eliminarNewsleter = new EliminarNewsLettrsController()


newsleterRouter.post("/", criarNewsleter.handle)
newsleterRouter.get("/", listarNewsleter.handle)
newsleterRouter.delete("/:id", eliminarNewsleter.handle)

export { newsleterRouter }