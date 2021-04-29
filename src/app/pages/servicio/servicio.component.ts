import { Component, OnInit } from '@angular/core';
import { ServicioService } from './servicio.service';

@Component({
  selector: 'app-servicio',
  templateUrl: './servicio.component.html',
  styleUrls: ['./servicio.component.scss']
})
export class ServicioComponent implements OnInit {

  constructor( 
      private servicioService: ServicioService
    ) {
    }

  ngOnInit(): void {
  }

}
