import { Request, Response } from "express";
import { MessagesService } from "../services/messages.services";
import { handleHttp } from "../utils/error.handle";


const service = new MessagesService();

// io.on("connection", async (socket) => {
//     socket.on("mensajeEnviado", async (mensaje) => {
//         await mensajesService.add(mensaje);
//         io.sockets.emit("chatRefresh", mensaje);
//     });
// });

export class MessagesController {

    async getMessages(req: Request, res: Response) {
        try {
            const messages = await service.getMessages()
            res.json(messages)
        } catch (e) {
            handleHttp(res, 'Error no se pudo obtener la lista de Productos')
        }
    }


    async getMessagesByEmail(req: Request, res: Response) {
        try {
            const { email } = req.params
            const messages = await service.getMessagesByEmail(email)
            if(messages == "") return res.json({mensaje: `Los mensajes del usuario con email:${email} no se encontraron`})
            res.json({mensajes: messages})
        } catch (e) {
            handleHttp(res, `Error no se pudo obtener los mensajes`)
        }
    }
    

    async createMessage(req: Request, res: Response) {
        try {
            const data = req.body
            const newMensaje = await service.createMessage(data)
            res.json({
                nuevoMensaje: newMensaje, 
                mensaje: "El mensaje se guardo correctamente"
            })
        } catch (e) {
            handleHttp(res, `Error no se pudo crear el mensaje`)
        }
    }
}


