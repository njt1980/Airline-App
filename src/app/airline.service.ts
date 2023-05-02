import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Airline } from './airline';

@Injectable({
  providedIn: 'root'
})
export class AirlineService {

  getAirlinesUrl: string = "http://localhost:8080/airline/getAll";
  saveAirlineUrl: string = "http://localhost:8080/airline/create";

  airline: Airline = new Airline();

  constructor(private http:HttpClient) {}

  getAirlines(){
    return this.http.get(this.getAirlinesUrl);
  }
  saveAirline(airline: Airline){
    console.log("Airline object : ",airline);
    return this.http.post<Airline>(this.saveAirlineUrl,airline);
  }
}
