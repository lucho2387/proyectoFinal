import { Router } from "express";
import { registerCtrl, loginCtrl } from "../controllers/auth.controller";

const routerAuth = Router()

routerAuth.post("/register", registerCtrl);
routerAuth.post("/login", loginCtrl);

export { routerAuth }
