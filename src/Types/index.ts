

// types/index.ts
// ─────────────────────────────────────────────────────────────
// Interfaces compartidas entre vistas del catálogo.
// Cuando conectes una API, estos tipos deben coincidir
// exactamente con la respuesta del backend.
// ─────────────────────────────────────────────────────────────
 
export type Modalidad = "Presencial" | "En línea" | "Híbrido";
export type Categoria = "Arte" | "Diseño" | "Negocios" | "Finanzas";
export type Nivel     = "Básico" | "Intermedio" | "Avanzado" | "Básico–Intermedio";
 
export interface CursoCatalogo {
  id:           number;
  nombre:       string;
  instructor:   string;
  categoria:    Categoria;
  nivel:        Nivel;
  modalidad:    Modalidad;
  sala:         string;
  duracion:     string;       // ej. "18 sesiones"
  horario:      string;       // ej. "Lun / Vie 09:00–11:00"  (texto para UI)
  horaInicio:   string;       // ej. "09:00"  (para lógica de calendario)
  horaFin:      string;       // ej. "11:00"
  dias:         string[];     // ej. ["Lunes", "Viernes"]
  cupoTotal:    number;
  cupoOcupado:  number;
  precio:       string;       // ej. "$4,800 MXN"
  descripcion:  string;
  tags:         string[];
  inicio:       string;       // ej. "2 Jun 2025"
  color:        string;       // color hex para acentos en calendario
}