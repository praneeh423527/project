import { Component, OnInit } from '@angular/core';
import { BookRideService } from '../book-ride/book-ride.service';
import { Rides } from './Rides';

@Component({
  selector: 'app-booking-details',
  templateUrl: './booking-details.component.html',
  styleUrls: ['./booking-details.component.css']
})
export class BookingDetailsComponent implements OnInit {
  errorMessage: any;
  rides: Rides[] = [];
  Status:any;

  constructor(private bookRideService:BookRideService) { }

  ngOnInit(): void {
    this.bookRideService.getRides().subscribe(
      rides=>{this.rides=rides, console.log(this.rides)},
      error=>this.errorMessage=error.error.message
    );
    
    console.log(this.rides);
  }
  status(status:any){
    if(status="b"){
      this.Status="Booked"
    }
  }
}
