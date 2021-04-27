import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { fromForm } from 'src/app/utils/utils';
import { Area } from '../area.model';
import { AreaService } from '../area.service';

declare var $: any;

@Component({
  selector: 'app-alta',
  templateUrl: './alta.component.html',
  styleUrls: ['./alta.component.scss']
})
export class AltaComponent implements OnInit {

  editForm = this.fb.group({
    nombre: [ null, [ Validators.required] ],
    idCentroAtencion: [ null, [ Validators.required ] ]
  });

  constructor( private areaService: AreaService,
              public fb: FormBuilder
              ) { }

  ngOnInit(): void {
  }

  limpiar():void{
    this.editForm.reset();
  }

  guardar(){
    const value = fromForm( this.editForm, new Area () );
    this.areaService.create( value )
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
