import { ProductosDao } from "../daos/products.daos";
import { CartDao } from "../daos/cart.daos";
import { CartDto } from "../dtos/cart.dto";
import { ProductoDto } from "../dtos/products.dto";


const cartDao = new CartDao();
const prodDao = new ProductosDao();

export class CartService {
    async getCarts() {
        try {
            return await cartDao.getCarts();
        } catch (e) {
            return e
        }
    }

    async getCartById(cartId: string) {
        try {
            return await cartDao.getCartById(cartId);
        } catch (e) {
            return e
        }
    }

    async getCartByEmail(email: string) {
        try {
            return await cartDao.getCartByEmail(email);
        } catch (e) {
            return e
        }
    }


    async createCart(email: string, product: any) {
        try {
            const productSave = new ProductoDto(product);
            return await cartDao.createCart(email, productSave);
        } catch (e) {
            return e;
        }
    }

    async updateCartById(cartId: string, product: any) {
        try {
            const productSave = new ProductoDto(product);
            return await cartDao.updateCartById(cartId, productSave);
        } catch (e) {
            return e;
        }
    }

    async deleteProductCartById(cartId: string, product: any) {
        try {
            const productDelete = new ProductoDto(product);
            return await cartDao.deleteProductCartById(cartId, productDelete);
        } catch (e) {
            return e;
        }
    }

    async deleteCartById(cartId: string) {
        try {
            return await cartDao.deleteCartById(cartId);
        } catch (e) {
            return e;
        }
    }
}
