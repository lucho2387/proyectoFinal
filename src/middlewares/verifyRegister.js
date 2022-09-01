import { ROLES } from "../models/Role"
import Users from "../models/Users"

// Verificamos si existe el rol
export const checkRolesExisted = (req, res, next) => {
    if(req.body.roles) {
        for(let i= 0; i < req.body.roles.length; i++){
            if (!ROLES.includes(req.body.roles[i])) {
                return res.status(400).json({
                    mensaje: `El rol ${req.body.roles[i]} no existe`
                })  
            }
        }
    }
    next()
}

// Verificamos si el email ya esta 
export const checkUserEmail = async (req, res, next) => {
    const { email } = req.body
    const user = await Users.findOne({email})

    if(user) return res.status(400).json({mensaje: "El email ya existe"})

    next()
}