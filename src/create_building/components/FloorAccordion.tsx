import { Accordion, AccordionDetails, AccordionSummary, Box, TextField } from "@mui/material";
import { Dispatch, SetStateAction } from "react";
import { Building } from "../../shared/types/Building";
import { Floor } from "../../shared/types/Floor";
import { Point } from "../../shared/types/Point";
import AddPointButton from "./AddPointButtons";
import BuildingFloorPlan from "../../shared/components/BuildingFloorPlan";
import DeleteFloorButton from "./DeleteFloorButton";
import DeletePointButton from "./DeletePointButton";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

interface FloorAccordionProps {
    floor: Floor,
    floorIndex: number,
    building: Building,
    setBuilding: Dispatch<SetStateAction<Building>>,
}

export default function FloorAccordion({ floor, floorIndex, building, setBuilding }: FloorAccordionProps) {

    const onChangeFloorName = (event: any, changeFloorIndex: number) => {
        building.floors[changeFloorIndex].name = event.target.value
        setBuilding({ ...building, floors: building.floors })
    }

    const onChangePointName = (event: any, changeFloorIndex: number, changePointIndex: number) => {
        if (event.target.value.includes(",")) {
            const pointList = event.target.value.split(",")
            building.floors[changeFloorIndex].points[changePointIndex].firstPoint = pointList[0] === "" ? 0 : pointList[0]
            building.floors[changeFloorIndex].points[changePointIndex].secondPoint = pointList[1] === "" ? 0 : pointList[1]
            setBuilding({ ...building, floors: building.floors })
        }
    }

    return (
        <Accordion>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
            >
                <TextField value={floor.name} onChange={(e) => onChangeFloorName(e, floorIndex)}
                    label="Floor name" variant="outlined" type="text" />
                <DeleteFloorButton building={building} setBuilding={setBuilding} floorIndex={floorIndex} />
            </AccordionSummary>
            <AccordionDetails>
                <BuildingFloorPlan seats={floor.seats} floorPoints={floor.points} newSeat={{
                    id: 0,
                    name: "",
                    seatStatus: null,
                    xcoordinates: 0,
                    ycoordinates: 0,
                    width: 0,
                    height: 0,
                    reservations: [],
                    available: false
                }} />
                <AddPointButton building={building} setBuilding={setBuilding}
                    floorIndex={floorIndex} />
                <Box style={{ display: "flex", marginTop: 20 }}>
                    {floor.points.map((point: Point, pointIndex) => (
                        <Box key={pointIndex} style={{ display: "flex", }}>
                            <TextField value={point.firstPoint + "," + point.secondPoint}
                                onChange={(e) => onChangePointName(e, floorIndex, pointIndex)}
                                label={"X,Y point " + (pointIndex + 1)}
                                variant="outlined" />
                            <DeletePointButton building={building} setBuilding={setBuilding}
                                floorIndex={floorIndex} pointIndex={pointIndex} />
                        </Box>
                    ))}
                </Box>
            </AccordionDetails>
        </Accordion>
    )
}