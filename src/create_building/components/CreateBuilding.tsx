import {
    Box, Card, TextField, Typography
} from "@mui/material";
import { useParams } from "react-router-dom";
import { Building } from "../../shared/types/Building";
import useReadBuilding from "../hooks/useReadBuilding";
import { useEffect, useState } from "react";
import AddFloorButton from "./AddFloorButton";
import FloorAccordion from "./FloorAccordion";
import { Floor } from "../../shared/types/Floor";
import SaveBuildingButton from "./SaveBuildingButton";

export const CreateBuilding = () => {
    const { buildingId } = useParams()
    const [building, setBuilding] = useState<Building>({
        id: 0,
        name: "",
        floors: []
    })


    if (buildingId !== undefined && buildingId !== "0") {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const { building: readBuilding, loading } = useReadBuilding(buildingId)

        // eslint-disable-next-line react-hooks/rules-of-hooks
        useEffect(() => {
            setBuilding(readBuilding)
        }, [loading, readBuilding])
    }

    const onChangeBuildingName = (event: any) => {
        setBuilding({ ...building, name: event.target.value })
    }

    return (
        <Box style={{ paddingTop: 20, margin: 2 }}>
            <Card style={{ padding: 20 }}>
                <Typography color={'secondary'} variant='h3'>
                    {buildingId !== "0" ? "Change" : "Create"} building
                </Typography>
                <TextField value={building.name} onChange={onChangeBuildingName}
                    label="Building name" variant="outlined" type="text" />
                <AddFloorButton building={building} setBuilding={setBuilding} />
                {building.floors.map((floor: Floor, floorIndex) => (
                    <FloorAccordion key={floorIndex} floor={floor} floorIndex={floorIndex}
                        building={building} setBuilding={setBuilding} />
                ))}
                <SaveBuildingButton building={building} />
            </Card>
        </Box>
    )
};