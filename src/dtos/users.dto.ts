export class UserDto {
    nombre: string;
    apellido: string;
    telefono: string;
    direccion: string;
    email: string;
    password: string;
    constructor(data: any) {
        this.nombre = data.nombre;
        this.apellido = data.apellido;
        this.telefono = data.telefono;
        this.direccion = data.direccion;
        this.email = data.email;
        this.password = data.password;
    }
}
