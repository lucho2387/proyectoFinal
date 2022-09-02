import { Router } from "express";
import { InfoController } from "../controllers/info.controller";
import { isAdmin } from "../middlewares/isAdmin";
import { checkJwt } from "../middlewares/session";

const routerInfo  = Router();
const controller = new InfoController();

routerInfo.get("/", isAdmin, checkJwt, controller.getInfo);


export { routerInfo };
