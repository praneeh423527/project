import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { BookRideService } from '../book-ride/book-ride.service';

@Component({
  selector: 'app-getrentalookingdetailsbyid',
  templateUrl: './getrentalookingdetailsbyid.component.html',
  styleUrls: ['./getrentalookingdetailsbyid.component.css']
})
export class GetrentalookingdetailsbyidComponent implements OnInit {
  showForm: boolean;
  materials: any;
  updateRideForm!: FormGroup;
  showdetails: boolean;

  constructor(private bookRideService:BookRideService,private router: Router) { }

  ngOnInit(): void {
    this.showForm=true;
    this.showdetails=false;
  }
  showRide(data:any){

    

    this.bookRideService.getrentalbookingdetailsbyid(data.userMobile).subscribe(
      materials=>{this.materials=materials, 
        this.showForm=false,
        this.showdetails=true,
        console.log(this.materials)},
      error=>{
        }
    );
  }

  Deletecar(id){
    console.log(id);
    this.bookRideService.deleterentalcar(id);
  }

}
