import { Request, Response } from "express";
import { CartService } from "../services/cart.service";
import { handleHttp } from "../utils/error.handle";
import { ProductosService } from "../services/products.service";

const service = new CartService();
const serviceProduct = new ProductosService()

export class CartController {

    async getCarts(req: Request, res: Response) {
        try {
            const carts = await service.getCarts()
            res.json({ listaCarrito: carts })
        } catch (e) {
            handleHttp(res, 'Error no se pudo obtener la lista de Carritos')
        }
    }

    async getCartById(req: Request, res: Response) {
        try {
            const { cartId } = req.params
            const cart = await service.getCartById(cartId)
            if(!cart) return res.json({mensaje: `El carrito con id:${cartId} no se encontro`})
            res.json({ carrito: cart })
        } catch (e) {
            handleHttp(res, 'Error no se pudo obtener el Carrito')
        }
        
    }

    async getCartByEmail(req: Request, res: Response) {
        try {
            const { email } = req.params
            const cart = await service.getCartByEmail(email)
            if(!cart) return res.json({mensaje: `El carrito del usuario no se encontro`})
            res.json({ carrito: cart })
        } catch (e) {
            handleHttp(res, 'Error no se pudo obtener el Carrito')
        }
        
    }

    async createCart(req: Request, res: Response) {
        try {
            const { productId } = req.params
            const { email }  = req.body
            const product = await serviceProduct.getProductById(productId)
            
            const cartExist = await service.getCartByEmail(email);
            if (!cartExist){
                    if(!product){
                        res.json({mensaje: "No se encontro el producto"})
                    } else {
                        const saveProduct = await service.createCart(email, product);
                        res.json({productoGuardado: saveProduct})
                    }
            } else {
                    if(!product){
                        res.json({mensaje: "No se encontro el producto"})
                    } else {
                        const cartId = cartExist._id
                        await service.updateCartById(cartId, product)
                        res.json({mensaje: `El producto con id:${productId} se agrego correctamente`})
                    }  
            } 
        } catch (e) {
            handleHttp(res, 'Error no se pudo obtener el Carrito')
        }
    }


    async deleteProductCartById(req: Request, res: Response) {
        try {
            const { productId } = req.params
            const { email } = req.body
            const product = await serviceProduct.getProductById(productId)
            const cartExist = await service.getCartByEmail(email);
            if (!cartExist){
                res.json({mensaje: "No se encontro el carrito"})
            }else {
                if(!product) {
                    res.json({mensaje: "No se encontro el producto"})
                }else {
                    const cartId = cartExist._id
                    const cartProduct = await service.deleteProductCartById(cartId, product);
                    res.json({mensaje: `El producto con id:${productId} se elimino correctamente`})
                }
            }
        } catch (e) {
            handleHttp(res, 'Error no se pudo eliminar el producto del Carrito')
        }
    }

    async deleteCartById(req: Request, res: Response) {
        try {
            const { cartId } = req.params
            const cart = await service.deleteCartById(cartId)
            if(!cart) return res.json({mensaje: `El carrito con id:${cartId} no se encontro`})
            res.status(200).json({mensaje: "El carrito fue eliminado correctamente"})
        } catch (e) {
            handleHttp(res, 'Error no se pudo eliminar el Carrito')
        }
        
    }
}
