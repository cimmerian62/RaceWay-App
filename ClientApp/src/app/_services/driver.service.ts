import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Driver } from '../_models/driver';

@Injectable({
  providedIn: 'root'
})
export class DriverService {

  constructor(private http: HttpClient) { }


  getDriversDb(): Observable<Array<Driver>> {
    return this.http.get<Array<Driver>>('api/driver')

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

  addDriver(driver: Driver): Observable<void> {
    console.log(driver);
    let body = JSON.stringify(driver);
    return this.http.post<void>('api/driver', body, { headers: this.buildBaseJsonRequestHeaders() })


  }
}
