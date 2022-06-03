import { Alert, Box, Button, Card } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { SeatStatus } from "../../shared/types/SeatStatus";
import useBuildings from "../../shared/hooks/useBuildings";
import BuildingFloorPlan from "../../shared/components/BuildingFloorPlan";
import SaveSeatButton from "./SaveSeatButton";
import CreateSeatInputs from "./CreateSeatInputs";
import { Seat } from "../../shared/types/Seat";
import DeleteSeatButton from "./DeleteSeatButton";


export const Floorplan = () => {
    const { buildingId, floorId } = useParams()
    const [xCoordinates, setXCoordinates] = useState(0)
    const [YCoordinates, setYCoordinates] = useState(0)
    const [width, setWidth] = useState(0)
    const [height, setHeight] = useState(0)
    const [name, setName] = useState("")

    const [seat, setSeat] = useState<Seat | undefined>(undefined);


    const buildingIdParam = buildingId === undefined ? 0 : Number(buildingId)
    const floorIdParam = floorId === undefined ? 0 : Number(floorId)

    const { readSelectedBuilding } = useBuildings()
    const { selectedBuilding: building, refetchDefaultBuilding, loading } = readSelectedBuilding(
        buildingIdParam, floorIdParam)

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const filterSeats = () => {
        if (seat !== undefined) {
            const filteredSeats = building.seats.filter((foundSeat: Seat) => foundSeat.id !== seat.id)
            building.seats = filteredSeats
        }
    }

    const handleClickSeat = (clickedSeat: Seat) => {
        if (seat !== undefined) {
            refetchDefaultBuilding()
        }
        setSeat(clickedSeat)
        setXCoordinates(clickedSeat.xcoordinates)
        setYCoordinates(clickedSeat.ycoordinates)
        setWidth(clickedSeat.width)
        setHeight(clickedSeat.height)
        setName(clickedSeat.name)
        filterSeats()
    }

    const clearSeat = () => {
        setSeat(undefined)
        setName("")
        refetchDefaultBuilding()
    }

    useEffect(() => {
        filterSeats()
    }, [filterSeats, loading])

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
                }} clickSeat={handleClickSeat} clickableSeat={true} />
                {seat !== undefined &&
                    <Alert severity="warning">You are editing a seat!</Alert>
                }
                <CreateSeatInputs setName={setName} name={name}
                    setXCoordinates={setXCoordinates} xCoordinates={xCoordinates}
                    setYCoordinates={setYCoordinates} yCoordinates={YCoordinates}
                    setWidth={setWidth} width={width}
                    setHeight={setHeight} height={height} />
                <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                    <SaveSeatButton floorId={Number(floorId)} name={name}
                        xCoordinates={xCoordinates} yCoordinates={YCoordinates}
                        width={width} height={height} seat={seat}
                        refetchBuilding={refetchDefaultBuilding} />
                    {seat !== undefined &&
                        <Box>
                            <DeleteSeatButton seatId={seat.id} refetchBuilding={clearSeat} />
                            <Button variant="contained" color={'secondary'}
                                onClick={clearSeat}>
                                Clear seat</Button>
                        </Box>
                    }
                </Box>
            </Card>
        </Box>
    )
};