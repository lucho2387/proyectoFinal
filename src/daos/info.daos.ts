import util from 'util'
import { config } from '../config/config';

export class InfoDao {
    constructor() {}

    async getInfo(){
        try {
            const info = {
                directorio : process.cwd(),
                ruta : process.execPath,
                procesoId : process.pid,
                nombrePlataforma : process.platform,
                versionNode : process.version,
                argumentoEntrada : process.argv,
                memoriaReservada : util.inspect(process.memoryUsage().rss),
                totalCPUs : require('os').cpus().length,
                url: config.URL,
                port: config.PORT,
                secret: config.SECRET,
                email: config.EMAIL,
                passemail: config.PASSEMAIL,
                admin: config.ADMIN,
            }
            return info
        } catch (e) {
            return e;
        }
    }
}
