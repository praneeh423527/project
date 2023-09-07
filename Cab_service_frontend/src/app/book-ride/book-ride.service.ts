import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Fare } from './fare';
import { Rides } from '../booking-details/Rides';

@Injectable({
  providedIn: 'root'
})
export class BookRideService {
  updatecar(data) {
    return this.http.put("http://localhost:8122/rentals/updatecar",data);
    
  }
  deletecar(rentals_id: any) {
    return this.http.delete<any>("http://localhost:8122/rentals/deletecar/"+rentals_id);
  
  }

  byidhelp(bookingid:any) {
    return this.http.get<any>("http://localhost:8765/bookings/byidhelp/"+bookingid); 
  }
  public remark(valuedata: any) {
    return this.http.put("http://localhost:8765/bookings/remarkput/"+valuedata.helpid,valuedata);
    
  }
  getRides() {
    console.log(this.http.get<Rides[]>("http://localhost:8765/bookings/bookingdetails"));
    return this.http.get<Rides[]>("http://localhost:8765/bookings/bookingdetails"); 
  }

  constructor(private http:HttpClient) { }
  private baseURL = "http://localhost:8765/bookings/faress";
  getFares() :Observable<Fare[]>{
    return this.http.get<Fare[]>("http://localhost:8765/bookings/fares");
  }
  bookRide(bookRideData: any): Observable<any>{
    return this.http.post<string>("http://localhost:8765/bookings/bookCab/",bookRideData);
  }
  DeleteFare(bookRideId: any): Observable<any>{
    return this.http.delete<any>("http://localhost:8765/bookings/fare/"+bookRideId);
  }

  PutFare(fareId:any,faredata:any){
    console.log(fareId);
    console.log(faredata);
    console.log(`${this.baseURL}/${fareId}`, faredata);
    return this.http.put(`${this.baseURL}/${fareId}`,faredata);
  }
 
  postFare(data:any){
    return this.http.post("http://localhost:8765/bookings/addfare",data);
  }

  public Register(data) {
    return this.http.post("http://localhost:8080/user/add",data);
  }
  public helpservice(data) {
    return this.http.post("http://localhost:8765/bookings/helppost",data);
  }

  getallhelps() :Observable<any>{
    return this.http.get<any>("http://localhost:8765/bookings/getallhelps");
  }


  getallcars() :Observable<any>{
    return this.http.get<any>("http://localhost:8122/rentals/getallcars");
  }

  postcars(data:any){
    return this.http.post("http://localhost:8122/rentals/postcars",data);
  }

  postbookingdetails(valuedata:any){
    return this.http.post("http://localhost:8122/rentals/bookcar",valuedata);
  }

  

  getallrentalbookingdetails() :Observable<any>{
    return this.http.get<any>("http://localhost:8122/rentals/getbookedcars");
  }

  getrentalbookingdetailsbyid(mobileNumber:any){
    return this.http.get<any>("http://localhost:8122/rentals/getbookedrentalcarsyid/"+mobileNumber);

  }
  deleterentalcar(id:Number){
    return this.http.delete("http://localhost:8122/rentals/deleterentaldetails/"+id);
  }
}
