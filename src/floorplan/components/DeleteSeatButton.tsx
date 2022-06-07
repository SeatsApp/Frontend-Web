import { IconButton } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import useSeat from "../../shared/hooks/useSeats";

interface DeleteSeatButtonProps {
    seatId: number,
    refetchBuilding: () => void
}

export default function DeleteSeatButton({ seatId, refetchBuilding }: DeleteSeatButtonProps) {
    const { deleteSeat } = useSeat()

    const handleDelete = () => {
        deleteSeat(seatId).then(() => {
            refetchBuilding()
        })
    }

    return (
        <IconButton style={{ color: "red" }} onClick={handleDelete}>
            <DeleteIcon />
        </IconButton>
    )
}