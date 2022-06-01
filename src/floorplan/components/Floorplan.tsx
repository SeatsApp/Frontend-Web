import { Box, Card } from "@mui/material";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { SeatStatus } from "../../shared/types/SeatStatus";
import useSelectedBuilding from "../hooks/useSelectedBuilding";
import BuildingFloorPlan from "../../shared/components/BuildingFloorPlan";
import CreateSeatButton from "./CreateSeatButton";
import CreateSeatInputs from "./CreateSeatInputs";


export const Floorplan = () => {
    const { buildingId, floorId } = useParams()
    const [xCoordinates, setXCoordinates] = useState(0)
    const [YCoordinates, setYCoordinates] = useState(0)
    const [width, setWidth] = useState(0)
    const [height, setHeight] = useState(0)
    const [name, setName] = useState("")

    if (buildingId !== undefined && floorId !== undefined) {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const { building } = useSelectedBuilding(buildingId, floorId)

        return (
            <Box style={{ paddingTop: 20, margin: 2 }}>
                <Card>
                    <BuildingFloorPlan seats={building.seats} floorPoints={building.floorPoints} newSeat={{
                        id: 0,
                        name: name,
                        seatStatus: SeatStatus.AVAILABLE,
                        xcoordinates: xCoordinates,
                        ycoordinates: YCoordinates,
                        width: width,
                        height: height,
                        reservations: [],
                        available: true
                    }} />
                    <CreateSeatInputs setName={setName} setXCoordinates={setXCoordinates}
                        setYCoordinates={setYCoordinates} setWidth={setWidth}
                        setHeight={setHeight} />
                    <CreateSeatButton floorId={Number(floorId)} name={name}
                        xCoordinates={xCoordinates} yCoordinates={YCoordinates}
                        width={width} height={height} />
                </Card>
            </Box>
        )
    }
    return (<Box />)
};