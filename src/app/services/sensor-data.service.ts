import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SensorDataService {
  private baseUrl = 'http://172.20.10.3'; // Reemplaza con la IP de tu ESP32

  constructor(private http: HttpClient) { }

  getTemperature1(): Observable<any> {
    return this.http.get(`${this.baseUrl}/temperature1`);
  }

  getHumidity1(): Observable<any> {
    return this.http.get(`${this.baseUrl}/humidity1`);
  }

  getTemperature2(): Observable<any> {
    return this.http.get(`${this.baseUrl}/temperature2`);
  }

  getHumidity2(): Observable<any> {
    return this.http.get(`${this.baseUrl}/humidity2`);
  }

  getTemperature3(): Observable<any> {
    return this.http.get(`${this.baseUrl}/temperature3`);
  }

  getHumidity3(): Observable<any> {
    return this.http.get(`${this.baseUrl}/humidity3`);
  }
  getTemperature4(): Observable<any> {
    return this.http.get(`${this.baseUrl}/temperature4`);
  }

  getHumidity4(): Observable<any> {
    return this.http.get(`${this.baseUrl}/humidity4`);
  }
}
