import { ProductosDao } from "../daos/products.daos"
import { ProductoDto } from "../dtos/products.dto"


const productDao = new ProductosDao();

export class ProductosService {
    async getProducts() {
        try {
            return await productDao.getProducts();
        } catch (e) {
            return e
        }
    }
    async getProductsCategory(categoria: string) {
        try {
            return await productDao.getProductsCategory(categoria);
        } catch (e) {
            return e
        }
    }

    async getProductById(productId: string) {
        try {
            return await productDao.getProductById(productId);
        } catch (e) {
            return e
        }
    }

    async deleteProductById(productId: string) {
        return await productDao.deleteProductById(productId);
    }

    async createProduct(data: any) {
        try {
            const product = new ProductoDto(data)
            return await productDao.createProduct(product)
        } catch (e) {
            return e
        }
    }

    async updateProduct(productId: string, data: any) {
        try {
            const product = new ProductoDto(data);
            return await productDao.updateProduct(productId, product);
        } catch (e) {
            return e;
        }
    }
}
