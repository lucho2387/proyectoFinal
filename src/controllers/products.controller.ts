import { Request, Response } from "express";
import { ProductosService } from "../services/products.service";
import { handleHttp } from "../utils/error.handle";


const service = new ProductosService();

export class ProductosController {
 

    async getProducts(req: Request, res: Response) {
        try {
            const { productId } = req.params
            const products = await service.getProducts(productId)
            if(!products) return res.json({mensaje: `El producto con id:${productId} no fue encontrado`})
            res.json({productos: products})
        } catch (e) {
            handleHttp(res, `Error no se pudo obtener el producto`)
        }
    }
    

    async getProductsCategory(req: Request, res: Response) {
        try {
            const { categoria } = req.params
            const products = await service.getProductsCategory(categoria)
            res.json({productosPorCtegoria: products})
        } catch (e) {
            handleHttp(res, `Error no se pudo obtener los productos`)
        }
    }

    async createProduct(req: Request, res: Response) {
        try {
            const data = req.body
            const newProduct = await service.createProduct(data)
            res.json({
                nuevoProducto: newProduct, 
                mensaje: "El producto se guardo correctamente"
            })
        } catch (e) {
            handleHttp(res, `Error no se pudo crear el producto`)
        }
    }

    async updateProduct(req: Request, res: Response) {
        try {
            const { productId } = req.params
            const data = req.body
            const productoActualizado = await service.updateProduct(productId, data)
            res.json({
                nuevoProducto: productoActualizado, 
                mensaje: "El producto se actualizo correctamente"
            })
        } catch (e) {
            handleHttp(res, `Error no se pudo actualizar el producto`)
        }
    }
    

    async deleteProductById(req: Request, res: Response) {
        try {
            const { productId } = req.params
            const deleteProduct = await service.deleteProductById(productId)
            res.json({
                productoEliminado: deleteProduct, 
                mensaje: "El producto se elimino correctamente"
            });
        } catch (e) {
            handleHttp(res, `Error no se pudo eliminar el producto`)
        }
    }
}
