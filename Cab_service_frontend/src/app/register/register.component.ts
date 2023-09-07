import { Component, OnInit } from '@angular/core';
import { BookRideService } from '../book-ride/book-ride.service';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private bookRideService:BookRideService) { }

  ngOnInit(): void {
  }

  register(data:any){
    console.log(data.value);
    this.bookRideService.Register(data.value).subscribe(
      (resp)=>{
        console.log(resp);
      },(err)=>{console.log(err);
    }
    );
  }
}
