import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AreaService {

  private URL = `${environment.apiUrl}area/test4/buscar/1`;

  constructor( private http: HttpClient ) { }

  // private dataUrl ="/area"

  getHi(): void {
    // let headers = new HttpHeaders();
    //   headers.append('Access-Control-Allow-Origin', '*');
    //   headers.append('Access-Control-Allow-Methods', 'GET, POST, PATCH, PUT, DELETE, OPTIONS');
    //   headers.append('Access-Control-Allow-Headers',' Origin, Content-Type, X-Auth-Token');
    // this.http.get( '/', { observe: 'response' }).subscribe(res => {
    //   console.log('respuesta');
    //   console.log(res);
    // }, err => {
    //   console.log('error1')
    //   console.error( err )
    // });
    // this.http.post( this.URL,{
    //     "usuario": "test1",
    //     "password": "test2",
    //     "userValido": false
    // }, { headers }
    // ).subscribe(console.log)
    this.http.get( this.URL, { observe: 'response' }).subscribe(res => {
      console.log('respuesta');
      console.log(res);
    }, err => {
      console.log('error2')
      console.error( err )
    });

  }

  // buscar(): Observable<any> {
  //   return this.http
  //     .get<any>(`${this.dataUrl}/buscar/`);
  // }
  // guardar(): Observable<number> {
  //   return this.http
  //     .get<number>(`${this.dataUrl}/guardar/`);
  // }
}
