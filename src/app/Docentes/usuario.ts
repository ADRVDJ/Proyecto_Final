import { Persona } from 'src/app/Docentes/Persona';
import { Rol } from 'src/app/Roles/rol';
export class Docentes {
  'usu_id': number;
  'usu_usuario': string;
  'usu_contrasena': string;
  'per_id': Persona;
  'rol_id': Rol;
}
