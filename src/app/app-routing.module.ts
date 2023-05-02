import { CustomerComponent } from './customer/customer.component';
import { AirlineComponent } from './airline/airline.component';
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { FlightformComponent } from './flightform/flightform.component';
import { BookingformComponent } from './bookingform/bookingform.component';
import { CustomerdetailComponent } from './customerdetail/customerdetail.component';

const routes: Routes = [
    {path:'customers/:id',component:CustomerdetailComponent},
    {path:'customers',component:CustomerComponent},
    {path:'airlines',component:AirlineComponent},
    {path:'flights',component:FlightformComponent},
    {path:'bookings',component:BookingformComponent}
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}