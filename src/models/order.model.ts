import { Schema, model } from "mongoose";
import { IOrder } from "../interfaces/orders.interfaces";

const OrderSchema = new Schema<IOrder>({
    email: { type: String, required: true },
    productos: [{
        _id: false,
        nombre: String,
        precio: Number,
        cantidad: {
            type: Number,
            required: true,
        }
    }],
    ordenId: { type: Number, required: true },
    estado: { type: String, required: true },
    fyh: { type: String, required: true },
    },
    {
        timestamps: true,
        versionKey: false
    }
);

const OrderModel = model<IOrder>("orders", OrderSchema);

export { OrderModel, OrderSchema };
