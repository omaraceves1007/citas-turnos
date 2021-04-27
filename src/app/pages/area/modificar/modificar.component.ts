import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Area } from '../area.model';
import { AreaService } from '../area.service';
import { fromForm } from '../../../utils/utils';

declare var $: any;

@Component({
  selector: 'app-modificar',
  templateUrl: './modificar.component.html',
  styleUrls: ['./modificar.component.scss']
})
export class ModificarComponent implements OnInit {

  editForm = this.fb.group({
    id: [ null, []],//{ value: null, disabled: true }
    nombre: [ null, [ Validators.required] ],
    idCentroAtencion: [ null, [ Validators.required ] ],
    activo: [ null, [ ] ]
  });

  constructor( private areaService: AreaService,
              public fb: FormBuilder
    ) { }

  ngOnInit(): void {

  }

  update(): void{
    const value = fromForm( this.editForm, new Area() );
    this.areaService.update( value )
    .subscribe(
      data => {
       console.log("datos---->", data);
      },
      error => {
       console.error('Algo salio mal',error);
      } );
  }

}
