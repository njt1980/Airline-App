import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Passenger } from './passenger';

@Injectable({
  providedIn: 'root'
})
export class PassengerService {

  constructor(private http:HttpClient) { }

  createPassenger(bookingId: number,passenger: Passenger){
    const createPassengerUrl = "http://localhost:8080/passenger/create/booking/"+bookingId;
    return this.http.post<Passenger>(createPassengerUrl,passenger);
  }
}
