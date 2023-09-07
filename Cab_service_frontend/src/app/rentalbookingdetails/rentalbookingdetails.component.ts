import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookRideService } from '../book-ride/book-ride.service';

@Component({
  selector: 'app-rentalbookingdetails',
  templateUrl: './rentalbookingdetails.component.html',
  styleUrls: ['./rentalbookingdetails.component.css']
})
export class RentalbookingdetailsComponent implements OnInit {
  data: any;
  finaldata: { mobilenumber: number; rentals_id: number; carname: string; price: number; location: string; carnumber: string; availability: string; car_image: string; date: string; emailid: string; };

  constructor(private bookRideService:BookRideService,private router: Router) { }

  ngOnInit(): void {
    this.data=JSON.parse(localStorage.getItem("objectvalue"));
  }

  onSubmit(value:any){
    console.log(value);

    this.finaldata={
      "mobilenumber": value.mobilenumber,
      "rentals_id": this.data.rentals_id,
      "carname":this.data.carname,
      "price": this.data.price,
      "location": this.data.location,
      "carnumber": this.data.carnumber,
      "availability": this.data.availability,
      "car_image": this.data.car_image,
      "date": value.date,
      "emailid": value.emailid
  }
  console.log(this.finaldata);

  this.bookRideService.postbookingdetails(this.finaldata).subscribe(
    (resp)=>{
      alert("Booking Success");
    },(err)=>{console.log(err);
  }
  );
  
  this.router.navigateByUrl('/Rentalcars');
  }
}
