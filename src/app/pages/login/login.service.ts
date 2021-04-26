import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private URL = `${environment.url}`;

  constructor( private http: HttpClient, private router: Router ) { }

  private dataUrl ="AutenticaQa-web/api/autenticaService/login";

  login( data: any ): any{
    // return this.http.post( this.url , data ).pipe( map ( ( resp: any ) => {
      // return this.saveUser( resp.resultado );
    // }));
  }

  logOut(): void {
    this.router.navigate( ['login'] );
  }

}
