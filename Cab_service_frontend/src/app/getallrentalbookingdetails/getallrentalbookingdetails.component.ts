import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookRideService } from '../book-ride/book-ride.service';

@Component({
  selector: 'app-getallrentalbookingdetails',
  templateUrl: './getallrentalbookingdetails.component.html',
  styleUrls: ['./getallrentalbookingdetails.component.css']
})
export class GetallrentalbookingdetailsComponent implements OnInit {
  materials: any;
  errorMessage: any;

  constructor(private bookRideService:BookRideService,private router: Router) { }

  ngOnInit(): void {
    this.bookRideService.getallrentalbookingdetails().subscribe(
      materials=>{this.materials=materials, console.log(this.materials)},
      error=>this.errorMessage=error.error.message
    );
  }

}
