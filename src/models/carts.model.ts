import { Schema, model } from "mongoose";
import { ICart } from "../interfaces/carts.interface";

const CartSchema = new Schema<ICart>(
    {
        // email: { type: String, required: true },
        // productos: [
        //     {
        //         producto: {
        //             nombre: String,
        //             descripcion: String,
        //             id: String,
        //             categoria: String,
        //             precio: Number,
        //             thumbnail: String,
        //             timestamp: Number,
        //         },
        //         cantidad: { type: Number },
        //     },
        // ],
        // timestamp: { type: String, required: true },
        email: { type: String, required: true },
        productos: [
            {
                type: Object,
                // cantidad: {
                //     type: Number,
                //     require: true,
                // }
            },
            
        ],
        // productos: [{
        //     ref: "productos",
        //     type: Schema.Types.ObjectId
        // }]
    },
    {
        timestamps: true,
        versionKey: false
    }
);

const CartModel = model<ICart>("Carrito", CartSchema);

export { CartModel, CartSchema };

