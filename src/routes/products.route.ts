import { Router } from "express";
import { ProductosController } from "../controllers/products.controller";
import { isAdmin } from "../middlewares/isAdmin";
import { checkJwt } from "../middlewares/session";

const routerProducts = Router()
const controller = new ProductosController();


routerProducts.get('/:productId?', checkJwt, controller.getProducts)

routerProducts.get('/:categoria/productos', checkJwt,controller.getProductsCategory)

routerProducts.post("/", isAdmin, checkJwt, controller.createProduct);

routerProducts.put("/:productId", isAdmin, checkJwt, controller.updateProduct);

routerProducts.delete('/:productId', isAdmin, checkJwt, controller.deleteProductById)

export { routerProducts }
