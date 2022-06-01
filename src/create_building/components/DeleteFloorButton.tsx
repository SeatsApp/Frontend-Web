import { IconButton } from "@mui/material";
import { Dispatch, SetStateAction } from "react";
import { Building } from "../../shared/types/Building";
import DeleteIcon from '@mui/icons-material/Delete';

interface DeleteFloorButtonProps {
    building: Building;
    floorIndex: number;
    setBuilding: Dispatch<SetStateAction<Building>>,
}

export default function DeleteFloorButton({ building, floorIndex, setBuilding }: DeleteFloorButtonProps) {
    const deleteFloor = (changeFloorIndex: number) => {
        const newFloors = building.floors.filter((_item, index) => index !== changeFloorIndex);
        setBuilding({ ...building, floors: newFloors })
    }

    return (
        <IconButton style={{ color: "red" }} onClick={() => deleteFloor(floorIndex)}>
            <DeleteIcon />
        </IconButton>
    )
}