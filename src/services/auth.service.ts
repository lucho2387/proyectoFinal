import { IAuth } from "../interfaces/auth.interface"
import { IUser } from "../interfaces/users.interface"
import { UserModel } from "../models/users.model"
import { encrypt, verified } from "../utils/bcrypt.handle"

const registerNewUser = async ({ nombre, apellido, telefono, direccion,email, password } : IUser) => {
    const chcekIs = await UserModel.findOne({ email })
    if (chcekIs) return "El usuario ya existe"
    const passHash = await encrypt(password)
    const registerNewUser = await UserModel.create({ 
        nombre, 
        apellido, 
        telefono, 
        direccion,
        email, 
        password: passHash
    })
    return registerNewUser
}   

const loginUser = async ({ email, password } : IAuth) => {
    const chcekIs = await UserModel.findOne({ email })
    if (!chcekIs) return `Email no encontrado`
    const passwordHash = chcekIs.password
    const isCorrect = await verified(password, passwordHash)

    if(!isCorrect) return "La contraseña es incorrecta"

    return chcekIs
}

export { registerNewUser, loginUser } 
