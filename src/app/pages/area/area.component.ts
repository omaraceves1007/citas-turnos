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


}
