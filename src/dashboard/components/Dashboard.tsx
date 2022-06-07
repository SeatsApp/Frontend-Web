import {
    Box,
    Card, Typography,
} from "@mui/material";
import useSeat from "../../shared/hooks/useSeats";
import { useEffect, useState } from "react";
import OveralInfo from './overallinfo/OveralInfo'
import SeatList from "./SeatList";
import SeatsFilter from "./SeatsFilter";
import { Seat } from "../../shared/types/Seat";
import useBuildings from "../../shared/hooks/useBuildings";

export default function Dashboard() {
    const { readSeatsFilter } = useSeat();
    const { seats: foundSeats, refetchSeats } = readSeatsFilter('/api/seats');
    const [startDate, setStartDate] = useState<string | null>(null);
    const [seats, setSeats] = useState<Seat[]>([])

    const [buildingId, setBuildingId] = useState<number>(0)
    const [floorId, setFloorId] = useState<number>(0)
    const { readSelectedBuilding } = useBuildings()

    const { selectedBuilding, refetchBuilding, refetchBuildingByDate } = readSelectedBuilding(buildingId, floorId, false)

    async function filterSeats() {
        let date = document.getElementById('date')?.getAttribute('value');
        let url = "/api/seats"
        if (date === "") {
            setStartDate(null);
        } else {
            date = date?.split('/')[2] + "-" + date?.split('/')[1] + "-" + date?.split('/')[0];
            url = `/api/seats/reservations/date/` + date;
        }

        if (buildingId !== 0) {
            if (date === "") {
                refetchBuilding(buildingId, floorId)
            } else {
                refetchBuildingByDate(buildingId, floorId, date)
            }
        } else {
            await refetchSeats(url);
        }
    }

    useEffect(() => {
        setSeats(foundSeats)
    }, [foundSeats])

    useEffect(() => {
        setSeats(selectedBuilding.seats)
    }, [selectedBuilding])

    return (
        <Box style={{ paddingTop: 20, margin: 2 }}>
            <Card style={{ padding: 20 }}>
                <Typography color={'secondary'} variant='h3'>Seats overview</Typography>
                <SeatsFilter filterSeats={filterSeats} setStartDate={setStartDate}
                    startDate={startDate} buildingId={buildingId} floorId={floorId}
                    setBuildingId={setBuildingId} setFloorId={setFloorId} />
                <OveralInfo seats={seats} />
                <SeatList filterByDate={filterSeats} seats={seats} />
            </Card>
        </Box>
    );
}