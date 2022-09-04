import { Router } from "express";
import { OrdersController } from "../controllers/orders.controller";
import { checkJwt } from "../middlewares/session";

const routerOrders  = Router();
const controller = new OrdersController();

routerOrders.post("/", controller.createOrder);

routerOrders.get("/", checkJwt, controller.getOrders);

routerOrders.get("/:email", checkJwt, controller.getOrdersEmail);


export { routerOrders };
