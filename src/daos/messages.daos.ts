import { MessagesModel } from "../models/message.model";
import { MessagesDto } from "../dtos/messages.dto";



export class MessageDao {
    
    constructor() {}

    async getMessages() {
        try {
            return await MessagesModel.find();
        } catch (e) {
            return e;
        }
    }
    async getMessagesByEmail(email: string) {
        try {
            return await MessagesModel.find({email});
        } catch (e) {
            return e;
        }
    }
    
    async createMessage(message: MessagesDto) {
        try {
            const data = new MessagesModel(message);
            return await data.save();
        } catch (e) {
            return e;
        }
    }
}
