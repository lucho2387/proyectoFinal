import { Types } from "mongoose";
import { ProductoDto } from "../dtos/products.dto";

export interface ICart {
    email: string;
    productos: Types.DocumentArray<{ producto: ProductoDto; }>;
    timestamp: string;
}
