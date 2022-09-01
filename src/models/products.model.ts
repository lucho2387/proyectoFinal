import { Schema, model } from "mongoose";
import { IProducto } from "../interfaces/products.interface";

const ProductosSchema = new Schema<IProducto>(
    {
        // id: { type: Number, required: true },
        nombre: { 
            type: String, 
            required: true 
        },
        descripcion: { 
            type: String, 
            required: true 
        },
        categoria: { 
            type: String, 
            required: true 
        },
        codigo: { 
            type: Number, 
            required: true 
        },
        imagen: { 
            type: String, 
            required: true
         },
        precio: { 
            type: Number, 
            required: true 
        },
        stock: { 
            type: Number, 
            required: true 
        },
    },
    {
        versionKey: false,
        timestamps: true
    }
);

const ProductoModel = model<IProducto>("products", ProductosSchema);

export { ProductosSchema, ProductoModel };
