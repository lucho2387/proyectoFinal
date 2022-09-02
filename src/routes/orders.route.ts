import { Router } from "express";
import { OrdersController } from "../controllers/orders.controller";

const routerOrders  = Router();
const controller = new OrdersController();

routerOrders.post("/", controller.createOrder);


export { routerOrders };