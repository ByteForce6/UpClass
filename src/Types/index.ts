export type Modalidad = "Presencial" | "En línea" | "Híbrido";
export type Categoria = "Arte" | "Diseño" | "Negocios" | "Finanzas";
export type Nivel     = "Básico" | "Intermedio" | "Avanzado" | "Básico–Intermedio";

export interface CursoCatalogo {
  id:          number;
  nombre:      string;
  instructor:  string;
  categoria:   Categoria;
  nivel:       Nivel;
  modalidad:   Modalidad;
  sala:        string;
  duracion:    string;
  horario:     string;
  horaInicio:  string;
  horaFin:     string;
  dias:        string[];
  cupoTotal:   number;
  cupoOcupado: number;
  precio:      string;
  descripcion: string;
  tags:        string[];
  inicio:      string;
  color:       string;
}