import { Request, Response } from "express";
import { OrdersService } from "../services/orders.service";
import { sendOrderMail } from "../utils/messages";

const service = new OrdersService();

export class OrdersController {
    async createOrder(req: Request, res: Response) {
        try {
            const email = req.body.email;
            const order = await service.createOrder(email);
             await sendOrderMail(order);
            res.json({mensaje: "El pedido fue generado correctamente"})
        } catch (e) {
            // logErr.error(e);
            res.status(500).render("error", { error: e });
        }
    }
}
