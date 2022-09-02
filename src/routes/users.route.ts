import { Router } from "express";
import { UsersController } from "../controllers/users.controller";
import { isAdmin } from "../middlewares/isAdmin";
import { checkJwt } from "../middlewares/session";

const routerUsers = Router()
const controller = new UsersController();

routerUsers.post("/", isAdmin, checkJwt, controller.createUser);

routerUsers.get("/", isAdmin, controller.getUsers);

routerUsers.get('/:userId', isAdmin, controller.getUserById)

routerUsers.put("/:userId", isAdmin, checkJwt, controller.updateUser);

routerUsers.delete('/:userId',isAdmin, checkJwt, controller.deleteUserById)

export { routerUsers }
