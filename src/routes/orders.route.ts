import { Router } from "express";
import { OrdersController } from "../controllers/orders.controller";
import { checkJwt } from "../middlewares/session";
import { isAdmin } from "../middlewares/isAdmin";

const routerOrders  = Router();
const controller = new OrdersController();


routerOrders.post("/", checkJwt, controller.createOrder);

routerOrders.get("/", isAdmin,checkJwt, controller.getOrders);

routerOrders.get("/:email", checkJwt, controller.getOrdersEmail);


export { routerOrders };
