import { Component, OnInit } from '@angular/core';
import { AreaService } from '../area.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.scss']
})
export class BuscarComponent implements OnInit {

  constructor( private areaService: AreaService ) { }

  ngOnInit(): void {
  }

  buscar(){
    // this.areaService.buscar()
    // .subscribe(
    //   data => {
    //    console.log("datos---->"+JSON.stringify(data));
    //   },
    //   error => {
    //    // this.modalMensajeService.modalError(error);

    //   }
    // );
  }

  limpiar():void{
   // this.editForm.reset();
  }

  guardar(){
    // const value = fromForm( this.editForm, new Area () );
    // this.areaService.create( value )
    // .subscribe(
    //   data => {
    //    console.log("datos---->", data);
    //     this.limpiar();
    //   },
    //   error => {
    //    console.error('Algo salio mal',error);
    //   } );
  }

}
