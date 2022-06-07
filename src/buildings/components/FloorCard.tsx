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
        <Card style={{ padding: 10, margin: 10, display: 'flex', flexWrap: 'wrap', justifyContent: "space-between"}}>
            <Typography variant={'h6'}>Floor: {floor.name}</Typography>
            <Button
                variant="outlined"
                color={'secondary'}
                onClick={() => navigate("/buildings/" + buildingId + "/floors/" + floor.id + "/floorplan")}
            >
                Manage floorplan
            </Button>
        </Card>
    )
}