import { Docentes } from 'src/app/Docentes/docentes';
import { Curso } from 'src/app/Cursos/curso';
export class Materias {
  'materia_id': number;
  'materia_nombre': string;
  'materia_descripcion': string;
  //   FK
  'docente_id': Docentes;
  'curso_id': Curso;
}
