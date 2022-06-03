import {Button} from '@mui/material';
import {toast} from "react-hot-toast";
import useCreateSeat from '../hooks/useCreateSeat';
import {Seat} from "../../shared/types/Seat";

interface CreateSeatButtonProps {
    floorId: number
    name: string,
    xCoordinates: number,
    yCoordinates: number,
    width: number,
    height: number,
    buildingSeats: Seat[]
}

export default function CreateSeatButton({
                                             floorId,
                                             name,
                                             xCoordinates,
                                             yCoordinates,
                                             width,
                                             height, buildingSeats
                                         }: CreateSeatButtonProps) {

    const createSeatClick = () => {
        if (name === "" || width === 0 || height === 0) {
            toast.error("You need to fill in the name, width and height")
        } else {
            useCreateSeat(floorId, name, xCoordinates, yCoordinates, width, height)
            buildingSeats.push({
                id: buildingSeats.length,
                name: name,
                seatStatus: null,
                xcoordinates: xCoordinates,
                ycoordinates: yCoordinates,
                width: width,
                height: height,
                reservations: [],
                available: true
            })
        }
    }

    return (
        <Button variant="contained" color={'secondary'}
                onClick={createSeatClick}>
            Save seat</Button>
    )
}