import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { UserComponent } from './user/user.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AuthGuard } from './_auth/auth.guard';
import { AuthInterceptor } from './_auth/auth.interceptor';
import { UserService } from './_services/user.service';
import { BookRideComponent } from './book-ride/book-ride.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BookRideService } from './book-ride/book-ride.service';
import { UpdateRideComponent } from './update-ride/update-ride.component';
import { UpdateRideService } from './update-ride/update-ride.service';
import { CancelRideComponent } from './cancel-ride/cancel-ride.component';
import { FetchComponent } from './fetch/fetch.component';
import { UpdatefareComponent } from './updatefare/updatefare.component';
import { BookingDetailsComponent } from './booking-details/booking-details.component';
import { AddFareDetailsComponent } from './add-fare-details/add-fare-details.component';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register/register.component';
import { HelpComponent } from './help/help.component';
import { HelpticketComponent } from './helpticket/helpticket.component';
import { HelpticketbyidComponent } from './helpticketbyid/helpticketbyid.component';
import { CarRentalComponent } from './car-rental/car-rental.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { MatCardModule} from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { AddcarsComponent } from './addcars/addcars.component';
import { UpdatecarsComponent } from './updatecars/updatecars.component';
import { RentalcarsComponent } from './rentalcars/rentalcars.component';
import { RentalbookingdetailsComponent } from './rentalbookingdetails/rentalbookingdetails.component';
import { GetallrentalbookingdetailsComponent } from './getallrentalbookingdetails/getallrentalbookingdetails.component';
import { GetrentalookingdetailsbyidComponent } from './getrentalookingdetailsbyid/getrentalookingdetailsbyid.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AdminComponent,
    UserComponent,
    LoginComponent,
    HeaderComponent,
    ForbiddenComponent,
    BookRideComponent,
    UpdateRideComponent,
    CancelRideComponent,
    FetchComponent,
    UpdatefareComponent,
    UpdatefareComponent,
    BookingDetailsComponent,
    AddFareDetailsComponent,
    RegisterComponent,
    HelpComponent,
    HelpticketComponent,
    HelpticketbyidComponent,
    CarRentalComponent,
    AddcarsComponent,
    UpdatecarsComponent,
    RentalcarsComponent,
    RentalbookingdetailsComponent,
    GetallrentalbookingdetailsComponent,
    GetrentalookingdetailsbyidComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    BrowserAnimationsModule,
    MatCardModule,
    MatToolbarModule,
    MatButtonModule

  ],
  providers: [
    BookRideService,
    UpdateRideService,
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass:AuthInterceptor,
      multi:true
    },
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
