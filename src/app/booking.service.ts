import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Booking } from './booking';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  booking: Booking = new Booking();

  constructor(private http:HttpClient) { }

  saveBooking(flightId:number,customerId:number,booking:Booking){
    const saveBookingUrl = "http://localhost:8080/booking/create/airline/"+
                            flightId+"/customer/"+customerId;
    return this.http.post<Booking>(saveBookingUrl,booking);
  }

  addPassenger(){}


}
