import { Schema, model } from "mongoose";
import { IProducto } from "../interfaces/products.interface";
import { IUser } from "../interfaces/users.interface";

const UserSchema = new Schema<IUser>(
    {
        nombre: {
            type: String, 
            required: true
        },
        apellido: {
            type: String, 
            required: true
        },
        telefono: {
            type: String, 
            required: true
        },
        direccion: {
            type: String, 
            required: true
        },
        email: {
            type: String, 
            required: true,
            unique: true
        },
        password: {
            type: String, 
            required: true
        },
    },
    {
        versionKey: false,
        timestamps: true
    }
);

const UserModel = model<IUser>("users", UserSchema);

export { UserSchema, UserModel };
