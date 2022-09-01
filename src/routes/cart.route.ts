import { Router } from "express";
import { CartController } from "../controllers/cart.controller";

const routerCart = Router();
const controller = new CartController();

routerCart.get('/', controller.getCarts)

routerCart.get('/:cartId', controller.getCartById)

routerCart.get('/users/:email', controller.getCartByEmail)

routerCart.post('/:productId', controller.createCart)

routerCart.delete('/:cartId/productos/:productId', controller.deleteProductCartById)

routerCart.delete('/:cartId', controller.deleteCartById)

export { routerCart };
