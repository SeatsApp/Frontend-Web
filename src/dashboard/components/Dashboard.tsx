import {
    Box,
    Card, Typography,
} from "@mui/material";
import useSeat from "../../shared/hooks/useSeats";
import {useState} from "react";
import OveralInfo from './overallinfo/OveralInfo'
import SeatList from "./SeatList";
import DateFilter from "./DateFilter";

function Dashboard() {
    const {readSeatsFilter} = useSeat();
    const {seats, refetchSeats} = readSeatsFilter('/api/seats');
    const [startDate, setStartDate] = useState<string | null>(null);

    async function filterByDate() {
        const value = document.getElementById('date')?.getAttribute('value');
        let string = "/api/seats"
        if (value === "") {
            setStartDate(null);
        } else {
            const date = value?.split('/')[2] + "-" + value?.split('/')[1] + "-" + value?.split('/')[0];
            string = `/api/seats/reservations/date/` + date;
        }
        await refetchSeats(string);
    }

    return (
        <Box style={{paddingTop: 20}}>
            <Card>
                <Box sx={{paddingTop: 2, display: 'flex', justifyContent: 'space-around'}}>
                    <Typography color={'secondary'} variant='h3'>Seats
                        overview</Typography>
                    <DateFilter  filterByDate={filterByDate} setStartDate={setStartDate} startDate={startDate}/>
                </Box>
                <OveralInfo seats={seats}/>
                <SeatList filterByDate={filterByDate} seats={seats}/>
            </Card>
        </Box>
    );
}

export default Dashboard;