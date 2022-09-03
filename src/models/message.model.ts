import { Schema, model } from "mongoose";
import { IMessages } from "../interfaces/messages.interface";

const MessagesSchema = new Schema<IMessages>(
    {   
        email: { 
            type: String, 
            required: true 
        },
        fyh: { 
            type: String, 
            required: true 
        },
        cuerpo: { 
            type: String, 
            required: true 
        },
    },
    {
        timestamps: true,
        versionKey: false
    }
);

const MessagesModel = model<IMessages>("messages", MessagesSchema);

export { MessagesSchema, MessagesModel };
