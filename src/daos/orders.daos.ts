import mongoose from "mongoose";
import { OrderModel } from "../models/order.model";
import { OrderDto } from "../dtos/orders.dto";
import { IOrder } from "../interfaces/orders.interfaces";
import { CartModel } from "../models/carts.model";

export class OrderDao {
    constructor() {
 
    }

    async getByEmail(email: string): Promise<OrderDto[] | undefined> {
        try {
            const order = await OrderModel.find({ email: email });
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
    
    async getAll() {
        try {
            return await OrderModel.find({}, { _id: 0, __v: 0 });
        } catch (e) {
            return e;
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

    async deleteByEmail(cartId: string) {
        try {
            return await CartModel.deleteOne({ _id: cartId });
        } catch (e) {
            return e;
        }
    }
}
