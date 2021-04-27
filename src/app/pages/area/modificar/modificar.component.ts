import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Area } from '../area.model';
import { AreaService } from '../area.service';

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

  formToValue(): any {
    let value = new Area ();
    return {...value, ...this.editForm.value };
  }

  update(): void{
    const value = this.formToValue();console.log(value)
    // this.areaService.update( value )
    // .subscribe(
    //   data => {
    //    console.log("datos---->", data);
    //   },
    //   error => {
    //    console.error('Algo salio mal',error);
    //   } );
  }

}
