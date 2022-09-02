import { NextFunction, Request, Response } from "express"
import { config } from "../config/config"

export const isAdmin = (req: Request, res: Response, next: NextFunction) => {
    try {
        if(config.ADMIN === "admin") {
            return next()
        }
        res.json({mensaje: "No esta autorizado para acceder a la ruta."})
    } catch (error) {
        res.status(500).json({error: error})
    }
}
