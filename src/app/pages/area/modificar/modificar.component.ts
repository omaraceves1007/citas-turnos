import { Component, OnInit } from '@angular/core';
import { AreaService } from '../area.service';

declare var $: any;

@Component({
  selector: 'app-modificar',
  templateUrl: './modificar.component.html',
  styleUrls: ['./modificar.component.scss']
})
export class ModificarComponent implements OnInit {

  constructor( private areaService: AreaService) { }

  ngOnInit(): void {
  }

}
