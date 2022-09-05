import mongoose from "mongoose";
import { CartModel } from "../models/carts.model";
import { CartDto } from "../dtos/cart.dto";
import { ProductoDto } from "../dtos/products.dto";


export class CartDao {
    constructor() {}
    
    async getCarts() {
        try {
            return await CartModel.find();
        } catch (e) {
            return e;
        }
    }

    async getCartById(cartId: string) {
        try {
            return await CartModel.findById(cartId);
        } catch (e) {
            return e;
        }
    }

    async getCartByEmail(email: string) {
        try {
            return await CartModel.findOne({ email });
        } catch (e) {
            return e;
        }
    }

    async createCart(email: string, product: ProductoDto) {
        try {
            const data = new CartModel({ email, productos: product })
            return await data.save()
        } catch (e) {
            return e;
        }
    }

    async updateCartById(cartId: string, product: ProductoDto) {
        try {
            return  await CartModel.findByIdAndUpdate({_id: cartId}, {$push: {productos: product}})
        } catch (e) {
            return e;
        }
    }

    async deleteProductCartById(cartId: string, product: ProductoDto) {
        try {
            return await CartModel.updateOne({_id: cartId}, {$pull: {productos: product}})
        } catch (e) {
            return e;
        }
    }

    async deleteCartById(cartId: string) {
        try {
            return await CartModel.findByIdAndDelete({_id: cartId})
        } catch (e) {
            return e;
        }
    }
}
