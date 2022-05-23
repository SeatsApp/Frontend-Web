import {User} from "./User";

export type Reservation = {
    id: number,
    startDateTime: string,
    endDateTime: string,
    checkedIn: boolean,
    user: User
};