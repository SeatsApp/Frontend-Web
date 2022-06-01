import { Box, Button } from "@mui/material";
import { Building } from "../../shared/types/Building";
import useCreateBuilding from "../hooks/useCreateBuilding";
import useUpdateBuilding from "../hooks/useUpdateBuilding";

interface SaveBuildingButtonProps {
    building: Building;
}

export default function SaveBuildingButton({ building }: SaveBuildingButtonProps) {

    const handleSaveBuilding = () => {
        if (building.id === 0) {
            // eslint-disable-next-line react-hooks/rules-of-hooks
            useCreateBuilding(building);
        } else {
            // eslint-disable-next-line react-hooks/rules-of-hooks
            useUpdateBuilding(building)
        }
    }

    return (
        <Box style={{ marginTop: 10, marginBottom: 10 }}>
            <Button variant="contained" color={'secondary'}
                onClick={handleSaveBuilding} >Save Building</Button>
        </Box>
    )
}