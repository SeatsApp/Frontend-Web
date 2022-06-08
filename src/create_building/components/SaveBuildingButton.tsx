import { Box, Button } from "@mui/material";
import toast from "react-hot-toast";
import { Building } from "../../shared/types/Building";
import useCreateBuilding from "../hooks/useCreateBuilding";
import useUpdateBuilding from "../hooks/useUpdateBuilding";

interface SaveBuildingButtonProps {
    building: Building;
}

export default function SaveBuildingButton({ building }: SaveBuildingButtonProps) {

    const handleSaveBuilding = () => {
        if (building.name === "") {
            toast.error("The building name must be filled in.")
        }
        else if (building.floors.find(floor => floor.name === "")) {
            toast.error("The floor names must be filled in.")
        }
        else if (building.floors.length === 0) {
            toast.error("The building must have atleast 1 floor.")
        }
        else if (building.id === 0) {
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