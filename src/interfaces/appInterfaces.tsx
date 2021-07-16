export interface LoginData {
  user: string;
  password: string;
}

export interface LoginResponse {
  usuario: Usuario;
  token: string;
}

export interface Usuario {
  usuario: Array<number | string>;
}

export interface MedicamentoResponse {
  medicamentos: Medicamento[];
}

export interface Medicamento {
  Id: string;
  Nombre: string;
  Descripcion: string;
  Gramos: string;
  Stock: number;
  'Tipo de Medicamento': string;
}

export interface EntregaResponse {
  entregas: Entrega[];
}

export interface Entrega {
  Id: string;
  Paciente: string;
  Medicamento: string;
  Cantidad: number;
  'Fecha de Entrega': string;
  Funcionario: string;
}

export interface RecetaResponse {
  recetas: Receta[];
}

export interface Receta {
  Id: string;
  Nombre: string;
  Edad: number;
  Medicamento: string;
  Descripcion: string;
  Cantidad: number;
  Medico: string;
}

export interface MermaResponse {
  mermas: Merma[];
}

export interface Merma {
  Id: string;
  Nombre: string;
  Cantidad: number;
  Detalle: string;
  Fecha: string;
}
