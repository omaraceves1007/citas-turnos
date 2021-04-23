import { Component, OnInit } from '@angular/core';
import { AreaService } from './area.service';

@Component({
  selector: 'app-area',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.scss']
})
export class AreaComponent implements OnInit {

  constructor(
    private areaService: AreaService,
  ) {
  }

  ngOnInit(): void {
    this.areaService.getHi();
  }
  panel =1;

  myFunc(valor: any){
    console.log("-------->"+valor);
    this.panel = valor;
  }

  buscar(){
    this.areaService.buscar()
    .subscribe(
      data => {
       console.log("datos---->"+JSON.stringify(data));
      },
      error => {
       // this.modalMensajeService.modalError(error);

      }
    );
  }

  guardar(){
    this.areaService.guardar()
    .subscribe(
      data => {
       console.log("datos---->"+JSON.stringify(data));
      },
      error => {
       // this.modalMensajeService.modalError(error);

      }
    );
  }

}
