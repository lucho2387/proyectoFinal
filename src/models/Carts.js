import { Schema, model } from "mongoose";

const CarritoSchema = new Schema(
    {
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


export default model('carritos', CarritoSchema)
