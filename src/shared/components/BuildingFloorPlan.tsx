import { Box } from '@mui/material';
import { Point } from '../../shared/types/Point';
import { Seat as SeatObject } from '../../shared/types/Seat';
import SeatSvg from './SeatSvg';

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
                        <SeatSvg key={seat.id} seat={seat} created={false} ></SeatSvg>
                    ))}
                    <SeatSvg seat={newSeat} created={true} ></SeatSvg>
                </svg>
            </Box>
        </Box>
    )
}
