import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BookRideService } from '../book-ride/book-ride.service';
import { FetchService } from './fetch.service';
import { Fare } from './fare';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';


@Component({
  selector: 'app-fetch',
  templateUrl: './fetch.component.html',
  styleUrls: ['./fetch.component.css']
})
export class FetchComponent implements OnInit {
  bookRideForm!: FormGroup;
  showFare=false;
  fares: Fare[] = [];
  errorMessage!: any;
  successMessage!: any;
  bookErrorMessage!: any;
  bookErrorMessageArray: string[]= [];
  noOfErrors!:number;
  source!:string;
  destination!:string;


  studentsArray: any[] = [];    
  deleteMessage=false;  
  studentlist:any;  
  isupdated = false;   
  // fares1: Observable<Fare[]>;  
  // student : Fare=new Fare();  

  constructor(private fb: FormBuilder,private bookRideService:BookRideService,private router: Router,) { }

  ngOnInit(): void {
    this.isupdated=false;  
    this.showFare=!this.showFare
    this.errorMessage=null;
    this.bookRideService.getFares().subscribe(
      fares=>{this.fares=fares, console.log(this.fares)},
      error=>this.errorMessage=error.error.message
    );
    
  }
  deleteFare(id: number) {  
    this.bookRideService.DeleteFare(id)  
      .subscribe(  
        data => {  
          console.log(data);  
          this.deleteMessage=true;  
          this.bookRideService.getFares().subscribe(data =>{  
            this.fares =data  
            })  
        },  
        error => console.log(error));  
  }  

  updateFare(id:number,source:string,destination:string,fare:number){
    localStorage.setItem('fareid1',String(id))
    localStorage.setItem('source1',source)
    localStorage.setItem('destination1',destination)
    localStorage.setItem('fare1',String(fare))
    this.router.navigateByUrl('/update');
  }

  Add(){
    this.router.navigateByUrl('/addfaredetails');
  }
}
