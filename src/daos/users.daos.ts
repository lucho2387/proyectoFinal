import mongoose from "mongoose";
import { UserModel } from "../models/users.model";
import { ProductoDto } from "../dtos/products.dto";
import { UserDto } from "../dtos/users.dto";


export class UserDao {

    constructor() {}
 
    async getUsers() {
        try {
            return await UserModel.find();
        } catch (e) {
            return e
        }
    }

    async getUserById(userId: string) {
        try {
            return await UserModel.findById(userId);
        } catch (e) {
            return e
        }
    }

    async deleteUserById(userId: string) {
        try {
            const deleteProduct = await UserModel.findByIdAndDelete(userId)
            return deleteProduct
        } catch (e) {
            return e
        }
    }

    async createUser(user: UserDto) {
        try {
            const data = new UserModel(user)
            return await data.save()
        } catch (e) {
            return e
        }
    }

    async updateUser(userId: string, user: UserDto) {
        try {
            return await UserModel.findOneAndUpdate({ _id: userId }, user, { new: true });
        } catch (e) {
            return e;
        }
    }
   
}
