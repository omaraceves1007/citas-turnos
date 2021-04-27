import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private URL = `${environment.apiUrl}`;

  constructor( private http: HttpClient, private router: Router ) { }

  private dataUrl ="https://10.85.6.28:9443/AutenticaQa-web/api/autenticaService/login";

  login( data: any ): any {

    // let headers = new HttpHeaders();
    //   headers.append("Content-Type", "application/x-www-form-urlencoded");

    // let params = new HttpParams();
    //   params.append( "usuario", "IN332384" );
    //   params.append( "password", "L1sS3tteS2o21Mm" );
    //   params.append( "grupo", "APL042" );
    //   params.append( "ID_CAT_APP", "cn=GS_Avisos,ou=recaudacion,O=INFONAVIT" );

    let body = {
      "usuario": "IN332384",
      "password": "L1sS3tteS2o21Mm",
      "grupo": "APL042",
      "ID_CAT_APP": "cn=GS_Avisos,ou=recaudacion,O=INFONAVIT"
    };

    this.http.post( this.dataUrl, body, { observe: 'response' }).subscribe( ( res: any ) => {
      console.log(res);
    }, err => {
      console.log('error')
      console.error( err )
    });
  }

  logOut(): void {
    this.router.navigate( ['login'] );
  }

}
