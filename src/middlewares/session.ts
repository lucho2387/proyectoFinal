import { NextFunction, Request, Response } from "express";
import { RequestExt } from "../interfaces/req-ext";
import { verifyToken } from "../utils/jwt.handle";


const checkJwt = (req: RequestExt, res: Response, next: NextFunction) => {
  try {
    const jwtByUser = req.headers.authorization || null
    const jwt = jwtByUser.split(" ").pop()
    const user = verifyToken(`${jwt}`) as { id: string };
    if (!user) {
      res.status(401)
      res.send("El JWT no es valido")
    } else {
        req.user = user
        next()
    }
  } catch (e) {
    res.status(400)
    res.json({ mensaje: "El JWT no es valido" })
  }
};

export { checkJwt };
