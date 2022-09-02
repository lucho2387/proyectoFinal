import { CartDao } from "../daos/cart.daos";
import { OrderDao } from "../daos/orders.daos";
import { OrderDto } from "../dtos/orders.dto";

const cartDao = new CartDao();
const orderDao = new OrderDao();

export class OrdersService {
    async createOrder(email: string): Promise<OrderDto | undefined> {
        try {
            const cart = await cartDao.getCartByEmail(email);
            const d = new Date();
            const fyh = `${d.getDay()}-${
                d.getMonth() + 1
            }-${d.getFullYear()} --- ${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`;
            let ordenId = 1;
            const orders = await orderDao.getAll();
            if (orders && orders.length >= 1) {
                ordenId = orders[orders.length - 1].ordenId + 1;
            }
            const orden: OrderDto = new OrderDto({
                email: email,
                productos: cart.productos,
                fyh: fyh,
                ordenId: ordenId,
                estado: "GENERADA",
            });
            const ordenResp = await orderDao.createOrder(orden);
            if (ordenResp) {
                const cartId = cart._id
                await cartDao.deleteCartById(cartId);
                return ordenResp;
            } else return undefined;
        } catch (e) {
            return e;
        }
    }
    
      async getOrders(email: string) {
        try {
            return await orderDao.getByEmail(email);
        } catch (e) {
            return e;
        }
    }
}
