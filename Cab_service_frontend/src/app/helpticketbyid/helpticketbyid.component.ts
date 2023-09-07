import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookRideService } from '../book-ride/book-ride.service';

@Component({
  selector: 'app-helpticketbyid',
  templateUrl: './helpticketbyid.component.html',
  styleUrls: ['./helpticketbyid.component.css']
})
export class HelpticketbyidComponent implements OnInit {
  errorMessage: any;
  helps: any;
  bookingid: string;

  constructor(private bookRideService:BookRideService,private router: Router) { }

  ngOnInit(): void {
    this.bookingid=localStorage.getItem("helpid1");
    this.bookRideService.byidhelp(this.bookingid).subscribe(
      helps=>{this.helps=helps, console.log(this.helps)},
      error=>this.errorMessage=error.error.message
    );
    
  }

}
