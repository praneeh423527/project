import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookRideService } from '../book-ride/book-ride.service';

@Component({
  selector: 'app-helpticket',
  templateUrl: './helpticket.component.html',
  styleUrls: ['./helpticket.component.css']
})
export class HelpticketComponent implements OnInit {
  
  errorMessage: any;
  helps: any;
  inputValue: any;
  valuedata: { helpid: number; remark: any; };
  

  constructor(private bookRideService:BookRideService,private router: Router) { }

  ngOnInit(): void {
    // window.location.reload();
    this.bookRideService.getallhelps().subscribe(
      helps=>{this.helps=helps, console.log(this.helps)},
      error=>this.errorMessage=error.error.message
    );
  }

  myFunc(helpid,remark) {
    this.valuedata = 

    {
      "helpid": Number(helpid),
      "remark": remark
      
     
  }
  console.log(remark);
  this.bookRideService.remark(this.valuedata).subscribe(
    helps=>{this.helps=helps, console.log(this.helps)},
    error=>this.errorMessage=error.error.message
  );
  alert("Sent Description");

  window.location.reload();

  }
}
