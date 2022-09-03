
import { MessageDao } from "../daos/messages.daos"
import { MessagesDto } from "../dtos/messages.dto"


const messageDao = new MessageDao();

export class MessagesService {
    async getMessages() {
        try {
            return await messageDao.getMessages();
        } catch (e) {
            return e
        }
    }

    async getMessagesByEmail(email: string) {
        try {
            return await messageDao.getMessagesByEmail(email);
        } catch (e) {
            return e
        }
    }


    async createMessage(data: any) {
        try {
            const product = new MessagesDto(data)
            return await messageDao.createMessage(product)
        } catch (e) {
            return e
        }
    }
}
