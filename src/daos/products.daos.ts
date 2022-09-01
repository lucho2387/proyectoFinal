import mongoose from "mongoose";
import { ProductoModel } from "../models/products.model";
import { ProductoDto } from "../dtos/products.dto";


export class ProductosDao {

    constructor() {}
 
    async getProducts() {
        try {
            return await ProductoModel.find();
        } catch (e) {
            return e
        }
    }
    async getProductsCategory(categoria: string) {
        try {
            return await ProductoModel.find({categoria})
        } catch (e) {
            return e
        }
    }

    async getProductById(productId: string) {
        try {
            return await ProductoModel.findById(productId);
        } catch (e) {
            return e
        }
    }

    async deleteProductById(productId: string) {
        try {
            const deleteProduct = await ProductoModel.findByIdAndDelete(productId)
            return deleteProduct
        } catch (e) {
            return e
        }
    }

    async createProduct(product: ProductoDto) {
        try {
            const data = new ProductoModel(product)
            return await data.save()
        } catch (e) {
            return e
        }
    }

    async updateProduct(productId: string, product: ProductoDto) {
        try {
            return await ProductoModel.findOneAndUpdate({ _id: productId }, product, { new: true });
        } catch (e) {
            return e;
        }
    }
   
}
