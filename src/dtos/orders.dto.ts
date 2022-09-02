import { ProductoDto } from "./products.dto";

export class OrderDto {
    email: string;
    productos: {producto: ProductoDto, cantidad: number}[];
    ordenId: number;
    estado: string;
    fyh: string;
    constructor(data: any) {
        this.email = data.email;
        this.productos = data.productos;
        this.ordenId = data.ordenId;
        this.estado = data.estado;
        this.fyh = data.fyh;
    }
}
