import { Request, Response } from "express";
import { InfoService } from "../services/info.services";
import { handleHttp } from "../utils/error.handle";

const service = new InfoService();

export class InfoController {

    async getInfo(req: Request, res: Response) {
        try {
            const info = await service.getInfo() 
            // res.render('infoConfiguracion', { info })
            res.json({
                Configuracion: info
            })
        } catch (e) {
            handleHttp(res, "No se pudo obtener informacion de la Configuracion")
        }
    }
   
}
