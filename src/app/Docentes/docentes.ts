import { Periodo } from 'src/app/Periodo/periodo';
import { Actividades } from 'src/app/Actividades/actividades';
import { Cargo } from 'src/app/Docentes/cargo';
import { Titulo } from 'src/app/Docentes/titulo';
import { GradoOcupacional } from 'src/app/Docentes/grado_ocupacional';
import { Persona } from 'src/app/Docentes/Persona';
export class Docentes {
  'docente_id': number;
  'docente_fecha_ingreso': Date;
  'docente_estado': string;
  // FK
  'tipo_id': number;
  'per_id': Persona;
  'cargo_id': Cargo;
  'titulo_id': Titulo;
  'periodo_id': Periodo;
  'grado_id': GradoOcupacional;
}
