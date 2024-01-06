import { Periodo } from 'src/app/Periodo/periodo';
import { Jornada } from 'src/app/Jornada/Jornada';
import { Carrera } from 'src/app/Carrera/carrera';

export class Curso {
  'curso_id': number;
  'curso_nombre': string;
  'curso_jornada': string;
  'curso_paralelo': string;
  //   FK
  'periodo_id': Periodo;
  'carrera_id': Carrera;
  'jornada_id': Jornada;
}
