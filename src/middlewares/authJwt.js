import jwt from "jsonwebtoken";
import config from "../config/config";
import User from '../models/Users'
import Role from '../models/Role'

export const verifyToken = async (req, res, next) => {

    try {
        const token = req.headers['token'];
        // console.log(token);

        if(!token) return res.status(403).json({mensaje: "El token no se encontro"})

        const decoded = jwt.verify(token, config.SECRET)
        req.userId = decoded.id;

        const user = await User.findById(req.userId, { password: 0})
        // console.log(user)
        if(!user) return res.status(404).json({mensaje: "El usuario no se encontro"})

        next()
    } catch (error) {
        return res.status(401).json({mensaje: "No Autorizado"})
    }
    
}

// Proteccion de Rutas
export const isAdmin = async (req, res, next) => {
    const user = await User.findById(req.userId)
    const roles = await Role.find({_id: {$in: user.roles}})
    
    for(let i = 0; i < roles.length; i++){
        if(roles[i].nombre === "admin"){
            next()
            return
        }
    }
    return res.status(403).json({mensaje: "No tiene permiso de Administrador"})
}