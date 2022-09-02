import { Request, Response } from "express";
import { OrdersService } from "../services/orders.service";
import { handleHttp } from "../utils/error.handle";
import { sendOrderMail } from "../utils/messages";
import { RequestExt } from "../interfaces/req-ext";

const service = new OrdersService();

export class OrdersController {
    async createOrder(req: Request, res: Response) {
        try {
            const email = req.body.email;
            const order = await service.createOrder(email);
             await sendOrderMail(order);
            res.json({mensaje: "El pedido fue generado correctamente"})
        } catch (e) {
            handleHttp(res, "Error no se pudo generar las Orden de compra")
        }
    }
    
    async getOrders(req: RequestExt, res: Response) {
        try {
            const email = req.user.id  
            const orders = await service.getOrders(email) 
            if(!orders) return res.json({ mensaje: "El usuario no tiene pedidos"})
            res.json({pedido: orders})
        } catch (e) {
            handleHttp(res, "Error no se pudo obtener las Ordenes de compra")
        }
    }
}
