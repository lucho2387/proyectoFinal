import {Router} from 'express';
import * as ordersCtrl from '../controllers/orders.controller'
import { authJwt } from '../middlewares'; 

const router = Router();


router.get('/', ordersCtrl.getOrders)

router.post('/', /*[authJwt.verifyToken, authJwt.isAdmin],*/ ordersCtrl.createOrder)

router.get('/:productId', ordersCtrl.getOrderById)


router.delete('/:productId', [authJwt.verifyToken, authJwt.isAdmin], ordersCtrl.deleteOrderById)

export default router;