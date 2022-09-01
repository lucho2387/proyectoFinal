import { Schema, model } from "mongoose";
import bcrypt from 'bcryptjs'

const usuarioSchema = new Schema (
    {
    nombre : {
        type:String,
        required: true
    },
    email : {
        type:String,
        required: true,
        unique: true,
        trim: true
    },
    password : {
        type:String,
        required: true
    },
    roles: [{
        ref: "roles",
        type: Schema.Types.ObjectId
    }]
    },
    {
        timestamps: true,
        versionKey: false
    }
)

usuarioSchema.statics.encriptarPassword = async (password) => {
    const cifrado = await bcrypt.genSalt(10)
    return await bcrypt.hash(password, cifrado)
}

usuarioSchema.statics.compararPassword = async (password, receivedPassword) => {
    return await bcrypt.compare(password, receivedPassword)
}

export default model('users', usuarioSchema)