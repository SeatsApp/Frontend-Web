import { Seat } from "../../shared/types/Seat";
import { Point } from "./Point";

export type Floor = {
    id: number,
    name: string,
    seats: Seat[],
    points: Point[],
};