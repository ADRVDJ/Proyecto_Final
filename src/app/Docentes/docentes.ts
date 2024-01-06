import { Periodo } from 'src/app/Periodo/periodo';
import { Actividades } from 'src/app/Actividades/actividades';
import { Cargo } from 'src/app/Docentes/cargo';
import { Titulo } from 'src/app/Docentes/titulo';
export class Docentes {
  'docente_id': number;
  'docente_fecha_ingreso': Date;
  'docente_estado': string;
  //   revisar tipo id
  'tipo_id': string;
  // FK
  // 'per_id': Periodo;
  'cargo_id': Cargo;
  'titulo_id': Titulo;
  'periodo_id': Periodo;
  'activi_id': Actividades;
}
