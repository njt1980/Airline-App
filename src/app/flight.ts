import { Airline } from "./airline";

export class Flight {
    flightId?: string;
    flightCode: string;
    origin: string;
    destination: string;
    numOfSeats: number;
    reservedSeats: number;
    availableSeats?: number;
    fullyBooked: boolean = false;
    flightStatus: string;
    // airline: Airline;
}
