import { Router } from 'express';
import * as authCtrl from '../controllers/auth.controller'
import { verifyRegister } from '../middlewares'

const router = Router();

router.post('/registro',  [
    verifyRegister.checkUserEmail, 
    verifyRegister.checkRolesExisted
], authCtrl.registro)

router.post('/', authCtrl.login)


export default router;