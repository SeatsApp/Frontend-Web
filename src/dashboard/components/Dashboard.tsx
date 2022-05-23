import {
    Box,
    Card, Typography,
} from "@mui/material";
import useSeat from "../../shared/hooks/useSeats";
import { useState } from "react";
import OveralInfo from './overallinfo/OveralInfo'
import SeatList from "./SeatList";
import DateFilter from "./DateFilter";

function Dashboard() {

    const [apiString, setApiString] = useState<string>(`/api/seats`);

    const { readSeatsFilter } = useSeat();
    const { seats, refetchSeats } = readSeatsFilter(apiString);

    return (
        <Box style={{ paddingTop: 20 }}>
            <Card>
                <Typography style={{marginBottom: 10}} variant='h3'>Seats overview</Typography>
                <DateFilter  apiString={apiString} refetchSeats={refetchSeats} setApiString={setApiString}/>
                <OveralInfo seats={seats} />
                <SeatList seats={seats} />
            </Card>
        </Box>
    );
}

export default Dashboard;