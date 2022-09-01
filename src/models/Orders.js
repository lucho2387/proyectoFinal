import mongoose from 'mongoose'


const orderSchema =  mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: "User"
        },
        orderItems: [
            {
                nombre: {
                    type: String,
                    required: true,
                },
                cantidad: {
                    type: Number,
                    required: true,
                },
                imagen: {
                    type: String,
                    require: true
                },
                precio: {
                    type: Number,
                    require: true
                },
                producto: {
                    type: mongoose.Schema.Types.ObjectId,
                    required: true,
                    ref: "Product"
                }
            }
        ],
        shippingAddress: {
            direccion: {
                type: String,
                require: true
            },
            ciudad: {
                type: String,
                require: true
            },
            codigoPostal: {
                type: String,
                require: true
            },
            pais: {
                type: String,
                require: true
            }
        },
        total: {
            type: Number,
            require: true,
            default: 0.0
        },
        fecha: {
            type: Date,
        }
    },
    {
        timestamps: true,
        versionKey: false
    }
)

export default mongoose.model("Order", orderSchema)
