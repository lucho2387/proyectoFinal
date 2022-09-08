import { Schema, model } from "mongoose";
import { ICart } from "../interfaces/carts.interface";

const CartSchema = new Schema<ICart>(
    {
        email: { type: String, required: true },
         productos: [{
            _id: false,
            id: String,
            nombre: String,
            precio: Number,
            cantidad: {
                type: Number,
                required: true,
                default: 1
            }
        }],
    },
    {
        timestamps: true,
        versionKey: false
    }
);

const CartModel = model<ICart>("Carrito", CartSchema);

export { CartModel, CartSchema };

