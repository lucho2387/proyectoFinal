import {Router} from 'express';
import * as infoCtrl from '../controllers/info.controller'


const router = Router();

router.get('/', infoCtrl.getInfo)

export default router;