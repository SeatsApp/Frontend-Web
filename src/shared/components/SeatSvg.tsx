import { Seat as SeatObject } from '../types/Seat';

interface SeatSvgProps {
    seat: SeatObject;
    created: boolean;
}

export default function SeatSvg({ seat, created }: SeatSvgProps) {
    return (
        <g key={seat.id} name={seat.name}>
            <rect strokeWidth="1" stroke="#000" height={seat.height} width={seat.width}
                y={seat.ycoordinates} x={seat.xcoordinates}
                fill={created ? "red" : "#00bf5f"} />
            <text y={(seat.ycoordinates + (seat.height / 2))}
                x={(seat.xcoordinates + (seat.height > seat.width ?
                    (seat.width / 5) : (seat.width / 3)))}
                fontSize={(seat.height < seat.width) ? (seat.height / 2) : (seat.width / 2)}
                fill="blue">{seat.name}</text>
        </g>
    )
}