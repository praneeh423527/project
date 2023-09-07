import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookRideService } from '../book-ride/book-ride.service';

@Component({
  selector: 'app-addcars',
  templateUrl: './addcars.component.html',
  styleUrls: ['./addcars.component.css']
})
export class AddcarsComponent implements OnInit {

  constructor(private bookRideService:BookRideService,private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(data:any){
    this.bookRideService.postcars(data).subscribe(
      (resp)=>{
        console.log(resp);
      },(err)=>{console.log(err);
    }
    );
    this.router.navigateByUrl('/carrentals');
  }
}
