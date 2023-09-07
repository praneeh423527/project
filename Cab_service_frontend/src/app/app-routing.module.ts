import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { AuthGuard } from './_auth/auth.guard';
import { BookRideComponent } from './book-ride/book-ride.component';
import { CancelRideComponent } from './cancel-ride/cancel-ride.component';

import { UpdateRideComponent } from './update-ride/update-ride.component';
import { FetchComponent } from './fetch/fetch.component';
import { UpdatefareComponent } from './updatefare/updatefare.component';
import { BookingDetailsComponent } from './booking-details/booking-details.component';
import { AddFareDetailsComponent } from './add-fare-details/add-fare-details.component';
import { RegisterComponent } from './register/register.component';
import { HelpComponent } from './help/help.component';
import { HelpticketComponent } from './helpticket/helpticket.component';
import { HelpticketbyidComponent } from './helpticketbyid/helpticketbyid.component';
import { CarRentalComponent } from './car-rental/car-rental.component';
import { AddcarsComponent } from './addcars/addcars.component';
import { UpdatecarsComponent } from './updatecars/updatecars.component';
import { RentalcarsComponent } from './rentalcars/rentalcars.component';
import { RentalbookingdetailsComponent } from './rentalbookingdetails/rentalbookingdetails.component';
import { GetallrentalbookingdetailsComponent } from './getallrentalbookingdetails/getallrentalbookingdetails.component';
import { GetrentalookingdetailsbyidComponent } from './getrentalookingdetailsbyid/getrentalookingdetailsbyid.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'admin', component: AdminComponent, canActivate:[AuthGuard], data:{roles:['Admin']} },
  { path: 'user', component: UserComponent ,  canActivate:[AuthGuard], data:{roles:['User']} },
  { path: 'login', component: LoginComponent },
  { path: 'forbidden', component: ForbiddenComponent },
  {path:'bookRide', component:BookRideComponent,  canActivate:[AuthGuard], data:{roles:['User']} },
  {path:'updateRide', component:UpdateRideComponent,  canActivate:[AuthGuard], data:{roles:['User']} },
  {path:'cancelRide', component:CancelRideComponent,  canActivate:[AuthGuard], data:{roles:['User']} },
  {path:'fetch', component:FetchComponent, canActivate:[AuthGuard], data:{roles:['Admin']} },
  {path:'update', component:UpdatefareComponent, canActivate:[AuthGuard], data:{roles:['Admin']} },
  {path:'bookingdetails', component:BookingDetailsComponent, canActivate:[AuthGuard], data:{roles:['Admin']} },
  {path:'addfaredetails', component:AddFareDetailsComponent, canActivate:[AuthGuard], data:{roles:['Admin']} },
  {path:'register', component:RegisterComponent},
  {path:'help', component:HelpComponent, canActivate:[AuthGuard], data:{roles:['User']} },
  {path:'helpticket', component:HelpticketComponent, canActivate:[AuthGuard], data:{roles:['Admin']} },
  {path:'helpticketbyid', component:HelpticketbyidComponent, canActivate:[AuthGuard], data:{roles:['User']} },
  {path:'carrentals', component:CarRentalComponent, canActivate:[AuthGuard], data:{roles:['Admin']} },
  {path:'Addcars', component:AddcarsComponent, canActivate:[AuthGuard], data:{roles:['Admin']} },
  {path:'Updatecars', component:UpdatecarsComponent, canActivate:[AuthGuard], data:{roles:['Admin']} },
  {path:'Rentalcars', component:RentalcarsComponent, canActivate:[AuthGuard], data:{roles:['User']} },
  {path:'Rentalbookingdetails', component:RentalbookingdetailsComponent, canActivate:[AuthGuard], data:{roles:['User']} },
  {path:'Getallrentalbookingdetails', component:GetallrentalbookingdetailsComponent, canActivate:[AuthGuard], data:{roles:['Admin']} },
  {path:'getrentalookingdetailsbyid', component:GetrentalookingdetailsbyidComponent, canActivate:[AuthGuard], data:{roles:['User']} }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
