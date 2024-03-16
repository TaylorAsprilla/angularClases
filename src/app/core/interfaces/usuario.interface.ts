// Para crear usuarios
export interface UsuarioInterface {
  nombre: string;
  email: string;
  tipoDocumento: string;
  numeroDocumento: number;
  login: string;
  password: string;
  rol: string;
  estado: boolean;
}
