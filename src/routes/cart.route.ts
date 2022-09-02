import { Router } from "express";
import { CartController } from "../controllers/cart.controller";
import { isAdmin } from "../middlewares/isAdmin";

const routerCart = Router();
const controller = new CartController();

routerCart.get('/', isAdmin, controller.getCarts)

routerCart.get('/:cartId', isAdmin,controller.getCartById)

routerCart.get('/users/:email', controller.getCartByEmail)

routerCart.post('/:productId', controller.createCart)

routerCart.delete('/:cartId/productos/:productId', controller.deleteProductCartById)

routerCart.delete('/:cartId', isAdmin,controller.deleteCartById)

export { routerCart };
