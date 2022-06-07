import {Button} from '@mui/material';
import { toast } from "react-hot-toast";
import useSeats from '../../shared/hooks/useSeats';
import { Seat } from '../../shared/types/Seat';

interface SaveSeatButtonProps {
    floorId: number
    name: string,
    xCoordinates: number,
    yCoordinates: number,
    width: number,
    height: number,
    seat: Seat | undefined,
    refetchBuilding: () => void
}

export default function SaveSeatButton({
    floorId,
    name,
    xCoordinates,
    yCoordinates,
    width,
    height,
    seat,
    refetchBuilding }: SaveSeatButtonProps) {
    const { updateSeat, createSeat } = useSeats()

    const createSeatClick = () => {
        if (name === "" || width === 0 || height === 0) {
            toast.error("You need to fill in the name, width and height")
        } else {
            if (seat === undefined) {
                createSeat(floorId, name, xCoordinates, yCoordinates, width, height)
                    .then(() => {
                        refetchBuilding()
                    })
            } else {
                const changedSeat: Seat = {
                    id: seat.id,
                    name: name,
                    xcoordinates: xCoordinates,
                    ycoordinates: yCoordinates,
                    width: width,
                    height: height,
                    reservations: seat.reservations,
                    available: seat.available,
                    seatStatus: seat.seatStatus
                }
                updateSeat(seat.id, changedSeat)
                    .then(() => {
                        refetchBuilding()
                    })
            }
        }
    }

    return (
            <Button sx={{m:2}} variant="contained" color={'secondary'}
                    onClick={createSeatClick}>
                Save seat</Button>
    )
}