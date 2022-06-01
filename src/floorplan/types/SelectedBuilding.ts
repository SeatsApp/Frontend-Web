import { Point } from "../../shared/types/Point";
import { Seat } from "../../shared/types/Seat";

export type SelectedBuilding = {
    buildingId: number,
    buildingName: string,
    floorId: number,
    floorName: string,
    floorPoints: Point[],
    seats: Seat[]
};
