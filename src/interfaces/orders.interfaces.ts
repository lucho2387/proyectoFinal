import { Types } from "mongoose";
import { ProductoDto } from "../dtos/products.dto";

export interface IOrder {
    email: string;
    productos: Types.DocumentArray<{producto: ProductoDto, cantidad: number}>;
    ordenId: number;
    estado: string;
    fyh: string;
}
