import { OrderModel } from "../models/order.model";
import { OrderDto } from "../dtos/orders.dto";
import { CartModel } from "../models/carts.model";

export class OrderDao {
    constructor() {}
    
    async getOrdersEmail(email: string): Promise<OrderDto[] | undefined> {
        try {
            const order = await OrderModel.find({email})
            if (order) {
                const orders = [];
                order.forEach((o) => {
                    orders.push(new OrderDto(o));
                });
                return orders;
            } else return undefined;
        } catch (e) {
            return e;
        }
    }
    
    async getOrders() {
        try {
            return await OrderModel.find();
        } catch (e) {
            return e
        }
    }
    
    async createOrder(orden: OrderDto) {
        try {
            const data = new OrderModel(orden);
            return await data.save();
        } catch (e) {
            return e;
        }
    }

    
}
