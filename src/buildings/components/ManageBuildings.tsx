import useReadBuildings from "../hooks/useReadBuildings";
import {
    Box,
    Button,
    Card, Typography,
} from "@mui/material";
import BuildingBox from "./BuildingBox";
import { useNavigate } from "react-router-dom";
import { Building } from "../../shared/types/Building";


export const ManageBuildings = () => {
    const navigate = useNavigate();
    const { buildings } = useReadBuildings()

    return (
        <Box style={{ paddingTop: 20, margin: 2 }}>
            <Card style={{ padding: 20 }}>
                <Box style={{ display: "flex", flexWrap: 'wrap', justifyContent: 'space-between'}}>
                    <Typography color={'secondary'} variant='h3'>Buildings overview</Typography>
                    <Button
                        variant="contained"
                        color={'secondary'}
                        onClick={() => navigate("/buildings/0")}
                    >
                        Create building
                    </Button>
                </Box>
                {buildings.map((building: Building) =>
                    <BuildingBox key={building.id} building={building} />
                )}
            </Card>
        </Box>
    )
};