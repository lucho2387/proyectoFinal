import { Router } from "express";
import { MessagesController } from "../controllers/messages.controller";


const routerMessages = Router()
const controller = new MessagesController();


routerMessages.post("/", controller.createMessage);

routerMessages.get("/", controller.getMessages);

routerMessages.get('/:email', controller.getMessagesByEmail)

export { routerMessages }
