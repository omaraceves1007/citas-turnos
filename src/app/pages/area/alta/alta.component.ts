import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AreaService } from '../area.service';

@Component({
  selector: 'app-alta',
  templateUrl: './alta.component.html',
  styleUrls: ['./alta.component.scss']
})
export class AltaComponent implements OnInit {

  public editFrom = this.fb.group({
    nombre: [ null, [ Validators.required] ],
    idCentroAtencion: [ '0', [ Validators.required ] ]
  });

  constructor( private areaService: AreaService,
              public fb: FormBuilder
              ) { }

  ngOnInit(): void {
  }

  guardar(){
    console.log(this.editFrom.value);
    // this.areaService.guardar()
    // .subscribe(
    //   data => {
    //    console.log("datos---->"+JSON.stringify(data));
    //   },
    //   error => {
    //    // this.modalMensajeService.modalError(error);

    //   }
    // );
  }
}
