import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { BookRideService } from '../book-ride/book-ride.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-car-rental',
  templateUrl: './car-rental.component.html',
  styleUrls: ['./car-rental.component.css']
})
export class CarRentalComponent implements OnInit {
  materials: any;
  randomItem: any;
  colors: any;
  errorMessage: any;

  constructor(private bookRideService:BookRideService,private router: Router) {
    // this.http.get("http://localhost:8122/rentals/getallcars").subscribe((data => {
    //   this.materials = data;
    //   console.log(this.materials);
    // }));
    
  }
  // i=0;
  ngOnInit(): void {
    
    this.bookRideService.getallcars().subscribe(
      materials=>{this.materials=materials, console.log(this.materials)},
      error=>this.errorMessage=error.error.message
    );
    // if(this.i==0){
    // window.location.reload();
    // this.i=1;
    // }
  }

  deleteBike(rentals_id){
    this.bookRideService.deletecar(rentals_id).subscribe(
      materials=>{this.materials=materials, this.ngOnInit()},
      error=>this.errorMessage=error.error.message
    );
  }

  updatecar(fd){
    localStorage.setItem('rentals_id',fd.rentals_id)
    localStorage.setItem('carname',fd.carname)
    localStorage.setItem('carnumber',fd.carnumber)
    localStorage.setItem('location',fd.location)
    localStorage.setItem('price',fd.price)
    localStorage.setItem('car_image',fd.car_image)
    localStorage.setItem('availability',fd.availability)
    this.router.navigateByUrl('/Updatecars');
  }
 
}
