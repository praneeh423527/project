import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookRideService } from '../book-ride/book-ride.service';

@Component({
  selector: 'app-rentalcars',
  templateUrl: './rentalcars.component.html',
  styleUrls: ['./rentalcars.component.css']
})
export class RentalcarsComponent implements OnInit {
  materials: any;
  errorMessage: any;

  constructor(private bookRideService:BookRideService,private router: Router) { }

  ngOnInit(): void {
    this.bookRideService.getallcars().subscribe(
      materials=>{this.materials=materials, console.log(this.materials)},
      error=>this.errorMessage=error.error.message
    );
  }

  Bookcar(fd){
    console.log(fd)
    window.localStorage.setItem("objectvalue",JSON.stringify(fd));
    this.router.navigateByUrl('/Rentalbookingdetails');
    

  }

}
