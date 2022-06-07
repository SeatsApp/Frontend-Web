import { Seat } from '../types/Seat';

interface SeatSvgProps {
    seat: Seat;
    created: boolean;
    clickable: boolean
    clickSeat: (seat: Seat) => void
}

export default function SeatSvg({ seat, created, clickable, clickSeat }: SeatSvgProps) {
    if (clickable) {
        return (
            <g>
                <g name={seat.name} onClick={() => clickSeat(seat)}
                    style={{ pointerEvents: "auto" }} >
                    <rect strokeWidth="1" stroke="#000" height={seat.height} width={seat.width}
                        y={seat.ycoordinates} x={seat.xcoordinates}
                        fill={created ? "red" : "#00bf5f"} />
                    <text y={(seat.ycoordinates + (seat.height / 2))}
                        x={(seat.xcoordinates + (seat.height > seat.width ?
                            (seat.width / 5) : (seat.width / 3)))}
                        fontSize={(seat.height < seat.width) ? (seat.height / 2) : (seat.width / 2)}
                        fill="blue">{seat.name}</text>
                </g>
            </g>
        )
    }
    else {
        return (<g name={seat.name}>
            <rect strokeWidth="1" stroke="#000" height={seat.height} width={seat.width}
                y={seat.ycoordinates} x={seat.xcoordinates}
                fill={created ? "red" : "#00bf5f"} />
            <text y={(seat.ycoordinates + (seat.height / 2))}
                x={(seat.xcoordinates + (seat.height > seat.width ?
                    (seat.width / 5) : (seat.width / 3)))}
                fontSize={(seat.height < seat.width) ? (seat.height / 2) : (seat.width / 2)}
                fill="blue">{seat.name}</text>
        </g>)
    }
}