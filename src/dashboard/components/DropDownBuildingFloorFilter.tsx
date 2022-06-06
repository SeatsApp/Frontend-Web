import { Building } from "../../shared/types/Building";
import { Floor } from "../../shared/types/Floor";
import useBuildings from '../../shared/hooks/useBuildings';
import { Box, FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { Dispatch, SetStateAction, useState } from "react";

interface DropDownBuildingFloorListProps {
    buildingId: number,
    floorId: number,
    setBuildingId: Dispatch<SetStateAction<number>>,
    setFloorId: Dispatch<SetStateAction<number>>,
}

export default function DropDownBuildingFloorFilter({ buildingId, floorId, setBuildingId, setFloorId }
    : DropDownBuildingFloorListProps) {
    const { readAllBuildings } = useBuildings();
    const { buildings, loading: loadingAllBuildings } = readAllBuildings()

    const [building, setBuilding] = useState<Building>()


    const clickBuilding = (event: any) => {
        const newBuildingId = event.target.value
        const buildingWithId: Building | undefined = buildings.find(obj => {
            return obj.id === Number(newBuildingId);
        });
        let foundFloorId = 0;
        if (buildingWithId !== undefined) {
            if (buildingWithId.floors.length !== 0) {
                foundFloorId = buildingWithId.floors[0].id
            }
            setBuilding(buildingWithId)
            setBuildingId(Number(newBuildingId))
            setFloorId(foundFloorId)
        }
        else {
            setBuilding(undefined)
            setBuildingId(0)
        }
    }

    const clickFloor = (event: any) => {
        const newFloorId = event.target.value
        setFloorId(newFloorId)
    }

    if (!loadingAllBuildings) {
        <Box></Box>
    }

    return (
        <Box>
            <FormControl fullWidth sx={{ marginTop: 2 }}>
                <InputLabel>Building name</InputLabel>
                <Select
                    value={buildingId}
                    label="Building name"
                    onChange={clickBuilding}
                >
                    <MenuItem value={0}>Everything</MenuItem>
                    {
                        buildings.map((buildingItem: Building) => (
                            <MenuItem key={buildingItem.id} value={buildingItem.id}>{buildingItem.name}</MenuItem>
                        ))
                    }
                </Select>
            </FormControl>
            {building !== undefined &&
                <FormControl fullWidth sx={{ marginTop: 2 }}>
                    <InputLabel>Floor name</InputLabel>
                    <Select
                        value={floorId}
                        label="Floor name"
                        onChange={clickFloor}
                    >
                        {
                            building.floors.map((floor: Floor) => (
                                <MenuItem key={floor.id} value={floor.id}>{floor.name}</MenuItem>
                            ))
                        }
                    </Select>
                </FormControl>
            }
        </Box>
    );
}