import { Router } from "express";
import { ProductosController } from "../controllers/products.controller";
import { isAdmin } from "../middlewares/isAdmin";

const routerProducts = Router()
const controller = new ProductosController();


routerProducts.post("/", isAdmin, controller.createProduct);

routerProducts.get("/", controller.getProducts);

routerProducts.get('/:productId', controller.getProductById)

routerProducts.put("/:productId", isAdmin, controller.updateProduct);

routerProducts.get('/:categoria/productos', controller.getProductsCategory)

routerProducts.delete('/:productId', isAdmin, controller.deleteProductById)

export { routerProducts }
