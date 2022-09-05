import { Request, Response } from "express";
import { OrdersService } from "../services/orders.service";
import { handleHttp } from "../utils/error.handle";
import { sendOrderMail } from "../utils/messages";
import { RequestExt } from "../interfaces/req-ext";

const service = new OrdersService();

export class OrdersController {
    async createOrder(req: RequestExt, res: Response) {
        try {
            const email = req.user.id  
            const order = await service.createOrder(email);
             await sendOrderMail(order);
            res.json({mensaje: "El pedido fue generado correctamente"})
        } catch (e) {
            handleHttp(res, "Error no se pudo generar las Orden de compra")
        }
    }
    
    async getOrdersEmail(req: RequestExt, res: Response) {
        try {
            const { email } = req.params  
            const orders = await service.getOrdersEmail(email) 
            if(!orders){
                return res.json({ mensaje: "El usuario no tiene pedidos"})
            } else {
                res.json({pedido: orders})
            }
        } catch (e) {
            handleHttp(res, "Error no se puede obtener las ordenes")
        }
    }
    
    async getOrders(req: Request, res: Response) {
        try {
            const orders = await service.getOrders() 
            res.json({pedidos: orders})
        } catch (e) {
            handleHttp(res, "Error lista de ordenes no encontrada")
        }
    }
}
