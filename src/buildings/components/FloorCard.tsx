import {
    Button,
    Card, Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Floor } from "../../shared/types/Floor";

interface FloorCardProps {
    buildingId: number,
    floor: Floor
}

export default function FloorCard({ buildingId, floor }: FloorCardProps) {
    const navigate = useNavigate();

    return (
        <Card style={{ padding: 10, margin: 10 }}>
            <Typography>{floor.name}</Typography>
            <Button
                variant="contained"
                color={'secondary'}
                onClick={() => navigate("/buildings/" + buildingId)}
            >
                Change building
            </Button>
            <Button
                variant="contained"
                color={'secondary'}
                onClick={() => navigate("/buildings/" + buildingId + "/floors/" + floor.id + "/floorplan")}
            >
                Manage floorplan
            </Button>
        </Card>
    )
}