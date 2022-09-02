import { UserDao } from "../daos/users.daos"
import { UserDto } from "../dtos/users.dto"


const userDao = new UserDao();

export class UsersService {
    async getUsers() {
        try {
            return await userDao.getUsers();
        } catch (e) {
            return e
        }
    }

    async getUserById(userId: string) {
        try {
            return await userDao.getUserById(userId);
        } catch (e) {
            return e
        }
    }

    async deleteUserById(userId: string) {
        return await userDao.deleteUserById(userId);
    }

    async createUser(data: any) {
        try {
            const user = new UserDto(data)
            return await userDao.createUser(user)
        } catch (e) {
            return e
        }
    }

    async updateUser(userId: string, data: any) {
        try {
            const user = new UserDto(data);
            return await userDao.updateUser(userId, user);
        } catch (e) {
            return e;
        }
    }
}
