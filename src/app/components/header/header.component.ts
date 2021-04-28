import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
moment.locale('es')

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  date: string = '';

  constructor() { }

  ngOnInit(): void {
    this.date = moment().format('LLL');
  }

}
