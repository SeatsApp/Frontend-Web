import { Box } from '@mui/material';
import { Point } from '../../buildings/types/Point';
import { Seat as SeatObject } from '../../shared/types/Seat';
import Seat from './Seat';

interface BuildingFloorPlanProps {
    seats: SeatObject[];
    floorPoints: Point[];
    newSeat: SeatObject;
}

export default function BuildingFloorPlan({ seats, floorPoints, newSeat }: BuildingFloorPlanProps) {
    let heightPoint = 0
    let widthPoint = 0
    let stringPoints = ""
    floorPoints.forEach((point: Point) => {
        if (widthPoint < point.firstPoint) {
            widthPoint = point.firstPoint
        }

        if (heightPoint < point.secondPoint) {
            heightPoint = point.secondPoint
        }
        stringPoints += point.firstPoint + "," + point.secondPoint + " "
    })

    return (
        <Box style={{ display: 'flex', justifyContent: 'center' }} >
            <Box>
                <svg
                    width="100%"
                    height="100%"
                    viewBox={`0 0 ${widthPoint} ${heightPoint}`}
                >
                    <g>
                        <polyline
                            //width,height
                            points={stringPoints}
                            fill="none"
                            stroke="black"
                            strokeWidth="15"
                        />
                    </g>
                    {seats.map((seat: SeatObject) => (
                        <Seat key={seat.id} seat={seat} created={false} ></Seat>
                    ))}
                    <Seat seat={newSeat} created={true} ></Seat>
                </svg>
            </Box>
        </Box>
    )
}
