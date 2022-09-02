import { Request, Response } from "express";
import { OrdersService } from "../services/orders.service";
// import { logger, sendOrderMail } from "../utils";
// import { logErr } from "../utils";

const service = new OrdersService();

export class OrdersController {
    async createOrder(req: Request, res: Response) {
        try {
            const email = req.body.email;
            const orden = await service.createOrder(email);
            // await sendOrderMail(orden);
            res.json({mensaje: "El pedido fue generado correctamente"})
        } catch (e) {
            // logErr.error(e);
            res.status(500).render("error", { error: e });
        }
    }
}
