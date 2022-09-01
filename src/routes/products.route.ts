import { Router } from "express";
import { ProductosController } from "../controllers/products.controller";
import { logMiddlware } from "../middlewares/log";

const routerProducts = Router()
const controller = new ProductosController();


routerProducts.post("/", controller.createProduct);

routerProducts.get("/", controller.getProducts);

routerProducts.get('/:productId', controller.getProductById)

routerProducts.put("/:productId", controller.updateProduct);

routerProducts.get('/:categoria/productos', controller.getProductsCategory)

routerProducts.delete('/:productId', controller.deleteProductById)

export { routerProducts }
