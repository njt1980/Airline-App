import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Airline } from 'app/airline';
import { AirlineService } from 'app/airline.service';

@Component({
  selector: 'app-airlineform',
  templateUrl: './airlineform.component.html',
  styleUrls: ['./airlineform.component.css']
})
export class AirlineformComponent {

  airline: Airline = new Airline();

  airlineForm = new FormGroup({
    airlineName: new FormControl(),
    airlineCode: new FormControl(),
    baseLocation: new FormControl()
  });
  constructor(private airlineService: AirlineService){}
  onSubmit(){
    console.log("Saving Airline..");
    this.airline.airlineName = this.airlineForm.value.airlineName;
    this.airline.airlineCode = this.airlineForm.value.airlineCode;
    this.airline.baseLocation = this.airlineForm.value.baseLocation;
    this.airlineService.saveAirline(this.airline).subscribe((data) => {
      console.log("Saving airline(in Service)...",data);
    });
  }

}
