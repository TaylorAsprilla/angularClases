export interface Cliente {
  _id: number; // Parámetro de solo lectura
  nombre: string;
  direccion: string;
  telefono: number;
  email: string;
  tipoDocumento: string;
  numeroDocumento: string;
  estado: boolean;
}
