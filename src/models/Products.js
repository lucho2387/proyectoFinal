import { Schema, model } from "mongoose";

const productSchema = new Schema({
    nombre : {
        type:String,
        required: true
    },
    descripcion : {
        type:String,
        required: true
    },
    categoria: {
        type:String,
        required: true
    },
    codigo : {
        type:String,
        required: true,
        unique: true
    },
    imagen : {
        type:String,
        required: true
    },
    precio : {
        type:Number,
        required: true
    },
    stock : {
        type:Number,
        required: true
    }
    },
    {
        timestamps: true,
        versionKey: false
    }
)

export default model('products', productSchema)


// const mongoose = require('mongoose')
// const { Schema } = mongoose;


// const ProductoSchema = new Schema (
//     {
//     nombre : {
//         type:String,
//         required: true
//     },
//     descripcion : {
//         type:String,
//         required: true
//     },
//     categoria: {
//         type:String,
//         required: true
//     },
//     codigo : {
//         type:String,
//         required: true,
//         unique: true
//     },
//     imagen : {
//         type:String,
//         required: true
//     },
//     precio : {
//         type:Number,
//         required: true
//     },
//     stock : {
//         type:Number,
//         required: true
//     }
//     },
//     {
//         timestamps: true,
//         versionKey: false
//     }
// )

// module.exports = ProductoSchema
