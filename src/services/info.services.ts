
import { InfoDao } from "../daos/info.daos";

const infoDao = new InfoDao();

export class InfoService {

    async getInfo() {
        try {
            return await infoDao.getInfo();
        } catch (e) {
            return e;
        }
    }
   
}
