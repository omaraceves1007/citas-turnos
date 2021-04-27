import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';
import { logging } from 'protractor';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor( private loginService: LoginService) { }

  ngOnInit(): void {
  }

  login(): void {
    this.loginService.login({});
  }

  registrar(){
    // this.loginService.registrar()
    // .subscribe(
    //   data => {
    //    console.log("Login---->"+JSON.stringify(data));
    //   },
    //   error => {
       // this.modalMensajeService.modalError(error);

      // }
    // );
  }

}
