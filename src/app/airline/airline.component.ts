import { Component, OnInit } from '@angular/core';
import { Airline } from 'app/airline';
import { AirlineService } from 'app/airline.service';

@Component({
  selector: 'app-airline',
  templateUrl: './airline.component.html',
  styleUrls: ['./airline.component.css']
})
export class AirlineComponent implements OnInit{

  airlines: Airline[];

  constructor(private airlineService: AirlineService){}
  
  ngOnInit(){
    this.airlineService.getAirlines().subscribe(
      (data:Airline[]) => {  this.airlines = data;   })
  }

}
