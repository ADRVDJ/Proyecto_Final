import { Component, OnInit } from '@angular/core';

import { JornadaService } from '../jornada.service';
import { FormGroup, FormBuilder, Validator, FormControl, Validators } from '@angular/forms';
import { Jornada } from '../Jornada';

@Component({
  selector: 'app-panel-crear-jornada',
  templateUrl: './panel-crear-jornada.component.html',
  styleUrls: ['./panel-crear-jornada.component.css']
})
export class PanelCrearJornadaComponent {

  jornadas: Array<Jornada>
  formularioJornada: FormGroup

  constructor(private fb: FormBuilder, private pService: JornadaService) {
    this.jornadas = new Array<Jornada>()
    this.formularioJornada = fb.group({
      nombre_jornada: new FormControl('', [Validators.required]),
    })
  }



  //CREAR JORNADA
  crearJornada() {

    if (this.formularioJornada.valid) {
      let jornada = new Jornada()
      jornada.jornada_nombre = this.formularioJornada.get('nombre_jornada')?.value
      this.pService.crear(jornada).subscribe(res => {

        this.getJornada()
        this.formularioJornada.reset()
      })

    }

  }

  //GET JORNADA
  getJornada() {
    this.pService.getJornada().subscribe(res => {
      this.jornadas = res

    })
  }

  //ELIMINAR PERSONA
  eliminarJornada(jornada_id: number) {
    return this.pService.eliminarJornada(jornada_id).subscribe(res => {
      this.getJornada()
    })

  }

}
