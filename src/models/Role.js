import { Schema, model } from "mongoose";

export const ROLES = ["admin", "user"]

const roleSchema = new Schema (
    {
    nombre : {
        type: String,
        required: true
    }
    },
    {
        versionKey: false
    }
)

export default model('roles', roleSchema)