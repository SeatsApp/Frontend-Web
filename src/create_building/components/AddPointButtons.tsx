import { Box, Button } from "@mui/material";
import { Dispatch, SetStateAction } from "react";
import { Building } from "../../shared/types/Building";

interface AddPointButtonProps {
    floorIndex: number
    building: Building;
    setBuilding: Dispatch<SetStateAction<Building>>,
}

export default function AddPointButton({ floorIndex, building, setBuilding }: AddPointButtonProps) {

    const addPoint = (changeFloorIndex: number) => {
        const floor = building.floors[changeFloorIndex]
        const pointCount = floor.points.length
        floor.points[pointCount] = {
            firstPoint: 0,
            secondPoint: 0
        }
        building.floors[changeFloorIndex] = floor
        setBuilding({ ...building, floors: building.floors })
    }

    return (
        <Box style={{ marginTop: 10, marginBottom: 10 }}>
            <Button variant="contained" color={'secondary'}
                onClick={() => addPoint(floorIndex)}>
                Add point</Button>
        </Box>
    )
}