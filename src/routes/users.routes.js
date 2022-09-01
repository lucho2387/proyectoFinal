import {Router} from 'express';
import * as userCtrl from '../controllers/users.controller'
import { authJwt, verifyRegister } from '../middlewares'
const router = Router();

router.post('/', [
    authJwt.verifyToken, 
    authJwt.isAdmin, 
    verifyRegister.checkRolesExisted,
],userCtrl.createUser)

router.get('/',userCtrl.getUsers)

router.get('/:userId', userCtrl.getUserById)

router.put('/:userId',[   
    authJwt.verifyToken, 
    authJwt.isAdmin
],userCtrl.updateUserById)

router.delete('/:userId',[   
    authJwt.verifyToken, 
    authJwt.isAdmin
],userCtrl.deleteUserById)

export default router;