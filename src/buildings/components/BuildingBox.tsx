import {
    Box, Typography,
} from "@mui/material";
import { Building } from "../../shared/types/Building";
import { Floor } from "../../shared/types/Floor";
import FloorCard from "./FloorCard";

interface BuildingBoxProps {
    building: Building
}

export default function BuildingBox({ building }: BuildingBoxProps) {
    return (
        <Box style={{ padding: 10, margin: 10 }}>
            <Typography variant='h5'>{building.name}</Typography>
            {building.floors.map((floor: Floor) =>
                <FloorCard key={floor.id} buildingId={building.id} floor={floor} />)}
        </Box>
    )
}