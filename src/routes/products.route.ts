import { Router } from "express";
import { ProductosController } from "../controllers/products.controller";
import { isAdmin } from "../middlewares/isAdmin";
import { checkJwt } from "../middlewares/session";

const routerProducts = Router()
const controller = new ProductosController();


routerProducts.post("/", isAdmin, checkJwt, controller.createProduct);

routerProducts.get("/", controller.getProducts);

routerProducts.get('/:productId', controller.getProductById)

routerProducts.put("/:productId", isAdmin, checkJwt, controller.updateProduct);

routerProducts.get('/:categoria/productos',controller.getProductsCategory)

routerProducts.delete('/:productId', isAdmin, checkJwt, controller.deleteProductById)

export { routerProducts }
