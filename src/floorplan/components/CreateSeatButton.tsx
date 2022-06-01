import { Button } from '@mui/material';
import { toast } from "react-hot-toast";
import useCreateSeat from '../hooks/useCreateSeat';

interface CreateSeatButtonProps {
    floorId: number
    name: string,
    xCoordinates: number,
    yCoordinates: number,
    width: number,
    height: number,
}

export default function CreateSeatButton({
    floorId,
    name,
    xCoordinates,
    yCoordinates,
    width,
    height }: CreateSeatButtonProps) {

    const createSeatClick = () => {
        if (name === "" || width === 0 || height === 0) {
            toast.error("You need to fill in the name, width and height")
        } else {
            useCreateSeat(floorId, name, xCoordinates, yCoordinates, width, height)
        }
    }

    return (
        <Button variant="contained" color={'secondary'}
            onClick={createSeatClick}>
            Save seat</Button>
    )
}