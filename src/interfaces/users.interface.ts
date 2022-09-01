import { IAuth } from "./auth.interface";

export interface IUser extends IAuth {
    nombre: string;
    apellido: string;
    telefono: string;
    direccion: string;
}
