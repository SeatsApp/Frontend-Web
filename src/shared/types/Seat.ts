import { Reservation } from "./Reservation";
import { SeatStatus } from "./SeatStatus";

export type Seat = {
    id: number,
    name: string,
    seatStatus: SeatStatus | null,
    xcoordinates: number,
    ycoordinates: number,
    width: number,
    height: number,
    reservations: Reservation[],
    available: boolean
};