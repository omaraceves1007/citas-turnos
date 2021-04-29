import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { fromForm } from 'src/app/utils/utils';
import { Servicio } from '../servicio.model';
import { ServicioService } from '../servicio.service';

@Component({
  selector: 'app-alta-servicio',
  templateUrl: './alta-servicio.component.html',
  styleUrls: ['./alta-servicio.component.scss']
})
export class AltaServicioComponent implements OnInit {

  editForm = this.fb.group({
    nombre: [ null, [ Validators.required] ],
    idCentroAtencion: [ null, [ Validators.required ] ]
  });

  constructor( private servicioService: ServicioService,
              public fb: FormBuilder
              ) { }

  ngOnInit(): void {
  }

  limpiar():void{
    this.editForm.reset();
  }

  guardar(){
    const value = fromForm( this.editForm, new Servicio () );
    this.servicioService.create( value )
    .subscribe(
      data => {
       console.log("datos---->", data);
        this.limpiar();
      },
      error => {
       console.error('Algo salio mal',error);
      } );
  }

}
