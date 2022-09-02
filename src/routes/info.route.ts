import { Router } from "express";
import { InfoController } from "../controllers/info.controller";

const routerInfo  = Router();
const controller = new InfoController();

routerInfo.get("/", controller.getInfo);


export { routerInfo };
