import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CancelRideService } from './cancel-ride.service';


@Component({
  selector: 'app-cancel-ride',
  templateUrl: './cancel-ride.component.html',
  styleUrls: ['./cancel-ride.component.css']
})
export class CancelRideComponent implements OnInit {
  cancelRideForm!: FormGroup;
  rides:any[]=[];
  successMessage!:any;
  errorMessage!:any;
  showRides:boolean=false;
  showError:boolean=false;
  showForm:boolean=true;
  constructor(private fb: FormBuilder,private cancelRideService:CancelRideService,private router: Router) { }

  ngOnInit(): void {
    this.cancelRideForm = this.fb.group({
      userMobile: ['',[Validators.required,Validators.min(6000000000),Validators.max(9999999999)]]
    })
  }

  help(ride:any){
    localStorage.setItem('helpid1',String(ride.bookingId))
    localStorage.setItem('helpdate',ride.travelDate)
    localStorage.setItem('usermobile',String(this.cancelRideForm.value['userMobile']));
    this.router.navigateByUrl('/help');
    
  }

  showRide(){
    this.showForm=false;
    this.cancelRideService.getRides(this.cancelRideForm.value['userMobile']).subscribe(
      response=>{
        this.showError=false,
        this.rides=response,
        this.showRides=true},
      error=>{
        this.showRides=false,
        this.errorMessage=error.error.errorMessage,
        this.showError=true, 
        this.showForm=this.errorMessage!=null?true:false}
    );
  }
  changeNumber(){
    this.cancelRideForm.reset();
    this.showRides=false;
    this.showForm=true;
    this.errorMessage=null;
    this.successMessage=null;
  }

  cancelRide(cancelRideData: any){
    this.successMessage=null;
    this.errorMessage=null;
    this.cancelRideService.cancelRide(cancelRideData['bookingId']).subscribe(
      response=>{
        this.showError=false,
        this.successMessage=response.successMessage,
        this.showRides=true,
        this.showRide()},
      error=>{
        this.showRides=false,
        this.errorMessage=error.error.errorMessage,
        this.showError=true, 
        this.showForm=this.errorMessage!=null?true:false}
    );
    
  }
}
