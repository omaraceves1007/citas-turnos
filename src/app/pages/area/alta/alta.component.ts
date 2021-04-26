import { Component, OnInit } from '@angular/core';
import { AreaService } from '../area.service';

@Component({
  selector: 'app-alta',
  templateUrl: './alta.component.html',
  styleUrls: ['./alta.component.scss']
})
export class AltaComponent implements OnInit {

  constructor(private areaService: AreaService) { }

  ngOnInit(): void {
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
