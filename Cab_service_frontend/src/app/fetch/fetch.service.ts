import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Fare } from './fare';

@Injectable({
  providedIn: 'root'
})
export class FetchService {

  constructor(private http:HttpClient) { }

  getFares() :Observable<Fare[]>{
    return this.http.get<Fare[]>("http://localhost:8765/bookings/fares");
  }

}