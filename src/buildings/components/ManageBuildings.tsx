import useReadBuildings from "../hooks/useReadBuildings";
import {
    Box,
    Card, Typography,
} from "@mui/material";
import BuildingBox from "./BuildingBox";
import { Building } from "../types/Building";


export const ManageBuildings = () => {

    const { buildings } = useReadBuildings()
    return (
        <Box style={{ paddingTop: 20, margin: 2 }}>
            <Card style={{ padding: 2 }}>
                <Typography color={'secondary'} variant='h3'>Buildings overview</Typography>
                {buildings.map((building: Building) =>
                    <BuildingBox key={building.id} building={building} />
                )}
            </Card>
        </Box>
    )
};