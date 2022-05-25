import { Box } from "@mui/material";
import TotalReservations from './TotalReservations';
import FreeSeats from './FreeSeats';
import CheckedInSeats from './CheckedInSeats';
import { Seat } from "../../types/Seat";

interface OveralInfoProps {
    seats: Seat[]
}

function OveralInfo({seats}: OveralInfoProps) {
    return (
        <Box style={{ paddingTop: 10, display: "flex", flexDirection: 'row', justifyContent:'space-around' }}>
            <TotalReservations seats={seats}/>
            <FreeSeats seats={seats}/>
            <CheckedInSeats seats={seats}/>
        </Box>
    );
}

export default OveralInfo;