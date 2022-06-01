import { IconButton } from "@mui/material";
import { Dispatch, SetStateAction } from "react";
import { Building } from "../../shared/types/Building";
import DeleteIcon from '@mui/icons-material/Delete';

interface DeletePointButtonProps {
    building: Building;
    floorIndex: number;
    pointIndex: number;
    setBuilding: Dispatch<SetStateAction<Building>>,
}

export default function DeletePointButton({ building, floorIndex, pointIndex, setBuilding }: DeletePointButtonProps) {

    const deletePoint = (changeFloorIndex: number, changePointIndex: number) => {
        if (building.floors[changeFloorIndex].points.length !== 1) {
            const floor = building.floors[changeFloorIndex]
            const newPoints = floor.points.filter((_point, pointFilterIndex) => pointFilterIndex !== changePointIndex)
            floor.points = newPoints
            building.floors[changeFloorIndex] = floor
            setBuilding({ ...building, floors: building.floors })
        }
    }

    return (
        <IconButton style={{ color: "red" }} onClick={() => deletePoint(floorIndex, pointIndex)}>
            <DeleteIcon />
        </IconButton>
    )
}