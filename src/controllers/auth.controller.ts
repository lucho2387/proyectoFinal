import { Response, Request } from "express"
import { registerNewUser, loginUser } from "../services/auth.service"

const registerCtrl = async (req: Request, res: Response) => {
    const data = req.body
    const responseUser = await registerNewUser(data)
    res.json({
        usuario: responseUser,
    })
}


const loginCtrl = async (req: Request, res: Response) => {
    const { email, password } = req.body
    const responseUser = await loginUser({ email, password })
    res.json({
        usuario: responseUser,
    })
}

export { loginCtrl, registerCtrl }
