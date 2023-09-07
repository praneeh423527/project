import { Component, OnInit } from '@angular/core';
import { BookRideService } from '../book-ride/book-ride.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-fare-details',
  templateUrl: './add-fare-details.component.html',
  styleUrls: ['./add-fare-details.component.css']
})
export class AddFareDetailsComponent implements OnInit {


  constructor(private bookRideService:BookRideService,private router: Router) { }
valuedata:any;
  ngOnInit(): void {
  }

  onSubmit(data:any){

    this.valuedata = 

  {
    "fareId": Number(data.fareId),
    "source": data.source,
    "destination": data.destination,
    "fare": Number(data.fare)
}


this.bookRideService.postFare(this.valuedata).subscribe(
  (resp)=>{
    console.log(resp);
  },(err)=>{console.log(err);
}
);
this.router.navigateByUrl('/fetch');
  }
}
