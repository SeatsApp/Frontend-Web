import { Box, Button } from "@mui/material";
import { Dispatch, SetStateAction } from "react";
import { Building } from "../../shared/types/Building";

interface AddFloorButtonProps {
    building: Building;
    setBuilding: Dispatch<SetStateAction<Building>>,
}

export default function AddFloorButton({ building, setBuilding }: AddFloorButtonProps) {

    const addFloor = () => {
        const floorCount = building.floors.length
        building.floors[floorCount] = {
            id: 0,
            name: "",
            points: [{
                firstPoint: 0,
                secondPoint: 0
            },
            {
                firstPoint: 1600,
                secondPoint: 0
            },
            {
                firstPoint: 1600,
                secondPoint: 1800
            },
            {
                firstPoint: 0,
                secondPoint: 1800
            },
            {
                firstPoint: 0,
                secondPoint: 0
            }],
            seats: []
        }
        setBuilding({ ...building, floors: building.floors })
    }

    return (
        <Box style={{ marginTop: 10, marginBottom: 10 }}>
            <Button variant="outlined" color={'secondary'}
                onClick={addFloor}>
                Add floor</Button>
        </Box>
    )
}