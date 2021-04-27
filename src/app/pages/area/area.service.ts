import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Area } from './area.model';

@Injectable({
  providedIn: 'root'
})
export class AreaService {

  private URL = `${environment.apiUrl}areas`;

  constructor( private http: HttpClient ) { }

  getAll(): Observable<Area[]> {
    return this.http.get( this.URL, { observe: 'response' } ).pipe( map ( ( res: any ) => {
      return res.data;
    }), error => error );
  }

  getById( id: number ): Observable<Area> {
    const url = `${ this.URL }/${ id }`;

    return this.http.get( url, { observe: 'response' } ).pipe( map ( ( res: any ) => {
      return res.data;
    }), error => error );
  }

  create( area: Area ): Observable<any> {
    return this.http.post( this.URL, area, { observe: 'response' } ).pipe( map ( ( res: any ) => {
      return res.data;
    }), error => error );
  }

  update( area: Area ): Observable<any> {
    return this.http.put( this.URL, area, { observe: 'response' } ).pipe( map ( ( res: any ) => {
      return res.data;
    }), error => error );
  }

  delete( id: number ): Observable<Area> {
    const url = `${ this.URL }/${ id }`;

    return this.http.delete( url, { observe: 'response' } ).pipe( map ( ( res: any ) => {
      return res.data;
    }), error => error );
  }

}
