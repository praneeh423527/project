import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookRideService } from '../book-ride/book-ride.service';

@Component({
  selector: 'app-updatecars',
  templateUrl: './updatecars.component.html',
  styleUrls: ['./updatecars.component.css']
})
export class UpdatecarsComponent implements OnInit {
  rentals_id: number;
  carnumber: string;
  carname: string;
  price: number;
  car_image: string;
  location: string;
  availability: string;
  data: { rentals_id: number; carname: string; price: number; location: string; carnumber: string; availability: string; car_image: string; };
  

  constructor(private bookRideService:BookRideService,private router: Router) { }

  ngOnInit(): void {
    
    this.rentals_id=Number(localStorage.getItem("rentals_id"));
    this.carname=localStorage.getItem("carname");
    this.carnumber=localStorage.getItem("carnumber");
    this.price=Number(localStorage.getItem("price"));
    this.car_image=localStorage.getItem("car_image");
    this.location=localStorage.getItem("location");
    this.availability=localStorage.getItem("availability");
  }

  onSubmit(data:any){
  //  this.data= {
  //     "rentals_id": Number(data.rentals_id),
  //     "carname": "Hyundai Creta",
  //     "price": 2500,
  //     "location": "Raidurga ,Hyderabad",
  //     "carnumber": "AP31GH2903",
  //     "availability": "Yes",
  //     "car_image": "https://imgd.aeplcdn.com/0x0/n/cw/ec/41564/hyundai-creta-right-front-three-quarter9.jpeg"
  // }

  this.bookRideService.updatecar(data).subscribe(
    (resp)=>{
      console.log(resp);
    },(err)=>{console.log(err);
  }
  );
  this.router.navigateByUrl('/carrentals');
   }
}
