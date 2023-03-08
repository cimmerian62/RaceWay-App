import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RaceCar } from '../_models/race-car';

@Injectable({
  providedIn: 'root'
})
export class RaceCarService {

  constructor(private http: HttpClient) { }


  getRaceCarsDb(): Observable<Array<RaceCar>> {
    return this.http.get<Array<RaceCar>>('api/raceCar')

  }
  getDrivers() {
    return [];

  }

  protected buildBaseJsonRequestHeaders() {
    let httpHeaders = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Accept', 'application/json')
    return httpHeaders;
  }

  addRaceCarDb(raceCar: RaceCar): Observable<void> {
    let body = JSON.stringify(raceCar);
    return this.http.post<void>('api/raceCar', body, { headers: this.buildBaseJsonRequestHeaders() })


  }
  

}
