import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';
import { FormsModule }   from '@angular/forms';
import { NgForm } from '@angular/forms';
import { BookRideService } from '../book-ride/book-ride.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-updatefare',
  templateUrl: './updatefare.component.html',
  styleUrls: ['./updatefare.component.css'],
  exportAs: 'ngForm'
})


export class UpdatefareComponent implements OnInit {
  id:any;
  submitted!:false;
  Source:any;
  Destination:any;
  Fare:any;
  fares=[];
  registerForm: any;
  formBuilder: any;
  NgForm!: NgForm;
  valuedata:any;
  

  constructor(private bookRideService:BookRideService,private router: Router) { }

  ngOnInit(): void {
    this.id=localStorage.getItem("fareid1");
    this.Source=localStorage.getItem("source1");
    this.Destination=localStorage.getItem("destination1");
    this.Fare=localStorage.getItem("fare1");
    console.log(this.Fare)
  }

  onSubmit(data: any){
    // console.log("111111")
    // console.log(data)
    // console.log("1111111")
//   this.valuedata = JSON.stringify({
//     fareId: Number(data.fareId),
//     source: data.source,
//     destination: data.destination,
//     fare: Number(data.Fareprice),
// });

this.valuedata = 

  {
    "fareId": Number(data.fareId),
    "source": data.source,
    "destination": data.destination,
    "fare": Number(data.fare)
}

 
// console.log("hiii")
// console.log(this.valuedata)
this.bookRideService.PutFare(data.fareId,this.valuedata).subscribe(
  (resp)=>{
    console.log(resp);
  },(err)=>{console.log(err);
}
);
this.router.navigateByUrl('/fetch');
  }
}
