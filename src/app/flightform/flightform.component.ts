import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Flight } from 'app/flight';
import { FlightService } from 'app/flight.service';

@Component({
  selector: 'app-flightform',
  templateUrl: './flightform.component.html',
  styleUrls: ['./flightform.component.css']
})
export class FlightformComponent {

  flight: Flight = new Flight();

  flightForm = new FormGroup({
    flightCodeControl : new FormControl(''),
    originControl : new FormControl(''),
    destinationControl : new FormControl(''),
    numOfSeatsControl : new FormControl(),
    reservedSeatsControl : new FormControl(),
    flightStatusControl : new FormControl(),
    airlineIdControl: new FormControl()
  })

  constructor(private flightService: FlightService){}

  onSubmit(){
    this.flight.flightCode = this.flightForm.value.flightCodeControl;
    this.flight.origin = this.flightForm.value.originControl;
    this.flight.destination = this.flightForm.value.destinationControl;
    this.flight.numOfSeats = this.flightForm.value.numOfSeatsControl;
    this.flight.reservedSeats = this.flightForm.value.reservedSeatsControl;
    this.flight.flightStatus = this.flightForm.value.flightStatusControl;
    this.flightService.saveFlight(this.flight,this.flightForm.value.airlineIdControl).subscribe(
      (data) => { console.log("Saved..") }
    );
  }

}
