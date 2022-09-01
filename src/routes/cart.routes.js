import {Router} from 'express';
import * as cartCtrl from '../controllers/cart.controller'
const router = Router();

router.get('/', cartCtrl.getCarts)

router.get('/:cartId', cartCtrl.getCartById)

router.get('/user/:email', cartCtrl.getUserCart)

router.post('/:productId', cartCtrl.createCart)

router.put('/:cartId/productos/:productId', cartCtrl.updateCartById)

router.delete('/:cartId/productos/:productId', cartCtrl.deleteProductCartById)

router.delete('/:cartId', cartCtrl.deleteCartById)

export default router;