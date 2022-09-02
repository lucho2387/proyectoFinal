import { Request, Response } from "express";
import { UsersService } from "../services/users.service";
import { handleHttp } from "../utils/error.handle";


const service = new UsersService();

export class UsersController {
    async getUsers(req: Request, res: Response) {
        try {
            const users = await service.getUsers()
            res.json(users)
        } catch (e) {
            handleHttp(res, 'Error no se pudo obtener la lista de Usuarios')
        }
    }

    async getUserById(req: Request, res: Response) {
        try {
            const { userId } = req.params
            const user = await service.getUserById(userId)
            if(!user) return res.json({mensaje: `El usuario con id:${userId} no fue encontrado`})
            res.json({usaurio: user})
        } catch (e) {
            handleHttp(res, `Error no se pudo obtener el usuario`)
        }
    }
    

    async deleteUserById(req: Request, res: Response) {
        try {
            const { userId } = req.params
            const deleteUser= await service.deleteUserById(userId)
            res.json({
                usuarioEliminado: deleteUser, 
                mensaje: "El Usuario se elimino correctamente"
            });
        } catch (e) {
            handleHttp(res, `Error no se pudo eliminar el usuario`)
        }
    }

    async createUser(req: Request, res: Response) {
        try {
            const data = req.body
            const newUser = await service.createUser(data)
            res.json({
                nuevoUsuario: newUser, 
                mensaje: "El usuario se guardo correctamente"
            })
        } catch (e) {
            handleHttp(res, `Error no se pudo crear el usuario`)
        }
    }

    async updateUser(req: Request, res: Response) {
        try {
            const { userId } = req.params
            const data = req.body
            const usuarioActualizado = await service.updateUser(userId, data)
            res.json({
                usuarioActualizado: usuarioActualizado, 
                mensaje: "El usuario se actualizo correctamente"
            })
        } catch (e) {
            handleHttp(res, `Error no se pudo actualizar el usuario`)
        }
    }
}
