import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { CustomerServiceService } from 'app/customer-service.service';
import { CustomerComponent } from './customer/customer.component';
import { CustomerformComponent } from './customerform/customerform.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AirlineformComponent } from './airlineform/airlineform.component';
import { AirlineComponent } from './airline/airline.component';
import { FlightformComponent } from './flightform/flightform.component';
import { BookingformComponent } from './bookingform/bookingform.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { CustomerdetailComponent } from './customerdetail/customerdetail.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtools, StoreDevtoolsModule } from '@ngrx/store-devtools';
import { CustomerReducer } from './CustomerReducers';
import { CustomerEffect } from './CustomerEffects';

// import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
    CustomerformComponent,
    AirlineformComponent,
    AirlineComponent,
    FlightformComponent,
    BookingformComponent,
    HomeComponent,
    CustomerdetailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule,
    FormsModule,
    StoreModule.forRoot({customer: CustomerReducer}),
    EffectsModule.forRoot([CustomerEffect])
    // StoreDevtoolsModule.instrument({
    //   maxAge:25,
    //   logOnly:
    // })
    // RouterModule
  ],
  providers: [CustomerServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
