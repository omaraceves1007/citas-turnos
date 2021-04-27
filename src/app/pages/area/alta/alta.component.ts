import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
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
    idCentroAtencion: [ '0', [ Validators.required ] ]
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

  guardar(){
    const value = this.formToValue();
    this.areaService.create( value )
    .subscribe(
      data => {
       console.log("datos---->", data);
      },
      error => {
       console.error('Algo salio mal',error);
      } );
  }

}
