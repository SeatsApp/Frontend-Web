import { Box } from '@mui/material';
import { Point } from '../../shared/types/Point';
import { Seat } from '../../shared/types/Seat';
import SeatSvg from './SeatSvg';

interface BuildingFloorPlanProps {
    seats: Seat[];
    floorPoints: Point[];
    newSeat: Seat;
    clickableSeat: boolean;
    clickSeat: (seat: Seat) => void;
}

export default function BuildingFloorPlan({ seats, floorPoints, newSeat, clickableSeat, clickSeat }: BuildingFloorPlanProps) {
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
                    {seats.map((seat: Seat) => (
                        <SeatSvg key={seat.id} seat={seat} created={false} 
                        clickable={clickableSeat} clickSeat={clickSeat} ></SeatSvg>
                    ))}
                    <SeatSvg seat={newSeat} created={true} clickable={false} clickSeat={() => { console.error("This is not possible") }} ></SeatSvg>
                </svg>
            </Box>
        </Box>
    )
}
