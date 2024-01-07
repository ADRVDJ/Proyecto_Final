import { HttpClient, HttpHeaders,HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Jornada } from './Jornada';

@Injectable({
  providedIn: 'root'
})
export class JornadaService {

 // rutaGlobal = 'http://localhost:8080/api/jornadas/'

  private rutaGlobal: string = 'http://localhost:8080/api/jornadas/';

  private httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' })
  constructor(private http: HttpClient) { }



  //CREAR 

  crear(jornadas: Jornada) {
    return this.http.post<Jornada>(this.rutaGlobal + 'guardar', jornadas, {
      observe: 'response'
    })

  }


  /*
  create(jornadas: Jornada): Observable<Jornada> {

    return this.http.post<Jornada>(this.rutaGlobal, jornadas, { headers: this.httpHeaders })
  }
  */

  //OBTENER
  getJornada() {

    return this.http.get<Jornada[]>(this.rutaGlobal + 'listar')
  }

  //ACTUALIZAR

  actualizarJornada(jornadas: Jornada) {
    return this.http.post<Jornada>(this.rutaGlobal + '/buscar/{id}', jornadas, {
      observe: 'response'
    })
  }

  actualizarJornadas1(jornada: Jornada): Observable<Jornada> {
    // Asumiendo que debes enviar el ID en la URL
    const url = `${this.rutaGlobal}buscar/${jornada.jornada_id}`;
  
    // Puedes ajustar los encabezados según sea necesario
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
  
    // Utilizando el método HTTP PUT para actualizar
    return this.http.put<Jornada>(url, jornada, { headers });
  }

  actualizarJornadaS2(id: number, jornada: Jornada): Observable<Jornada> {
    return this.http.put<Jornada>(`${this.rutaGlobal}/actualizar/${id}`, jornada);
  }
/* 
  getCliente(id: any): Observable<Cliente> {
    return this.http.get<Cliente>(${this.urlEndPoint}/${id});
  }
 */
  

  //ELIMINAR
  eliminarJornada(jornada_id: number): Observable<any> {
    const url = `${this.rutaGlobal}eliminar/${jornada_id}`;

    // Puedes agregar encabezados si es necesario
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    return this.http.delete(url, { headers, observe: 'response' });
  }


  /*
delete(id: any): Observable<Jornada> {
  const url = ${this.rutaGlobal}/${id};
  return this.http.delete<Jornada>(url, { headers: this.httpHeaders });
}*/


}