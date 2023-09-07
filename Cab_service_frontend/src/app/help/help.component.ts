import { Component, OnInit } from '@angular/core';
import { BookRideService } from '../book-ride/book-ride.service';

@Component({
  selector: 'app-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.css']
})
export class HelpComponent implements OnInit {
  id: string;
  traveldate: string;
  mobile: string;
  valdata: { bookingid: number; traveldate: any; mobile: number; description: any;remarks:any; };


  constructor(private bookRideService:BookRideService) { }

  ngOnInit(): void {
    this.id=localStorage.getItem("helpid1");
    this.traveldate=localStorage.getItem("helpdate");
    this.mobile=localStorage.getItem("usermobile");
  }

  onSubmit(data:any){
    console.log(data);
    this.valdata = 
  {
    "bookingid": Number(data.id),
    "traveldate": data.traveldate,
    "mobile": Number(data.mobile),
    "description":data.description,
    "remarks":""
}

this.bookRideService.helpservice(this.valdata).subscribe(
  (resp)=>{
    alert("Help Ticket Raised");
  },(err)=>{
    alert("Help Ticket Not Raised");
    console.log(err);
}
);
console.log(this.valdata);
  }


}
