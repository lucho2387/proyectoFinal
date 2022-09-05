import { Response, Request } from "express"
import { registerNewUser, loginUser } from "../services/auth.service"

const registerCtrl = async (req: Request, res: Response) => {
    const { nombre, apellido, telefono, direccion, email, password, confirmPassword } = req.body
    
    if(password !== confirmPassword){
        res.json({mensaje: 'Las contraseñas no coiciden'})
    }else {
        if(password.length < 4){
            res.json({mensaje: 'La contraseña debe contener mas de 4 caracteres'})
        }else {
            const responseUser = await registerNewUser({nombre, apellido, telefono, direccion, email, password})
            res.json({
                usuario: responseUser,
            })
        }
    }
}

const loginCtrl = async (req: Request, res: Response) => {
    const { email, password } = req.body
    const responseUser = await loginUser({ email, password })
    res.json({
        usuario: responseUser,
    })
}

export { loginCtrl, registerCtrl }
