export class ProductoDto {
    id?: Number;
    nombre: string;
    descripcion: string;
    categoria: string;
    codigo: Number
    imagen: string;
    precio: Number;
    stock: Number;
    constructor(data: any) {
        this.id = data.id;
        this.nombre = data.nombre;
        this.descripcion = data.descripcion;
        this.categoria = data.categoria;
        this.codigo = data.codigo
        this.imagen = data.imagen;
        this.precio = data.precio;
        this.stock = data.stock;
    }
}
