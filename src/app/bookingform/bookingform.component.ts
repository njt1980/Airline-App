import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { Booking } from 'app/booking';
import { BookingService } from 'app/booking.service';
import { Passenger } from 'app/passenger';
import { PassengerService } from 'app/passenger.service';

@Component({
  selector: 'app-bookingform',
  templateUrl: './bookingform.component.html',
  styleUrls: ['./bookingform.component.css']
})
export class BookingformComponent {

  booking: Booking = new Booking();

  constructor(private fb:FormBuilder,
              private bookingService:BookingService,
              private passengerService:PassengerService){}

  bookingForm = this.fb.group({
    bookingCode: [''],
    customerId: [],
    flightId: [],
    passengers: this.fb.array([
      // this.fb.control('')
      // this.fb.group({
      //   firstName: [''],
      //   lastName: ['']
      // })
    ])
  });

  get passengers():FormArray{
    return this.bookingForm.get("passengers") as FormArray
  }

  newPassenger():FormGroup{
    return this.fb.group({
      firstName:[''],
      lastName:['']
    })
  }

  onSubmit(){
    this.booking.bookingCode = this.bookingForm.value.bookingCode;
    const flightId = this.bookingForm.value.flightId;
    const customerId = this.bookingForm.value.customerId;
    this.bookingService.saveBooking(flightId,customerId,this.booking).subscribe((booking) => {
      this.bookingForm.value.passengers.forEach((passenger:Passenger) => {
        this.passengerService.createPassenger(booking.id,passenger).subscribe((data) => {
          console.log("Passenger saved...",data);
        });
      })
    });
    console.log(this.bookingForm.value);
  }

  addPassenger(){
    this.passengers.push(this.newPassenger());
  }

  removePassenger(i:number){
    this.passengers.removeAt(i);
  }


}
