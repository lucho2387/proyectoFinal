import { Router } from "express";
import { CartController } from "../controllers/cart.controller";
import { isAdmin } from "../middlewares/isAdmin";
import { checkJwt } from "../middlewares/session";

const routerCart = Router();
const controller = new CartController();

routerCart.get('/', isAdmin, controller.getCarts)

routerCart.get('/:cartId', isAdmin, controller.getCartById)

routerCart.get('/users/:email', checkJwt, controller.getCartByEmail)

routerCart.post('/:productId/productos', checkJwt, controller.createCart)

routerCart.delete('/:productId/productos', checkJwt, controller.deleteProductCartById)

routerCart.delete('/:cartId', isAdmin, checkJwt, controller.deleteCartById)

export { routerCart };
