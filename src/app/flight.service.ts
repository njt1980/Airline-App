import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Flight } from './flight';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FlightService {

  
  constructor(private http:HttpClient) { }

  saveFlight(flight: Flight,id: number):Observable<Flight>{
    console.log(id);
    let saveFlightUrl : string = "http://localhost:8080/flight/create/airline/" + id;
    return this.http.post<Flight>(saveFlightUrl,flight);
  }

}
