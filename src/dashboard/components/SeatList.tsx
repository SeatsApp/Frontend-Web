import {
    Box,
    Button, FormControlLabel, FormGroup, Switch,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    ThemeProvider,
    Typography
} from '@mui/material';
import { Seat } from '../../shared/types/Seat';
import { theme } from '../../theme';
import SeatDetailsModal from "./SeatDetailsModal";
import {useState} from "react";
import useSeat from "../../shared/hooks/useSeats";

interface SeatListProps {
    seats: Seat[];
    filterByDate: () => void;
}

export default function SeatList({seats, filterByDate}: SeatListProps) {
    const [modalOpen, setModalOpen] = useState<boolean>(false);
    const [clickedSeat, setClickedSeat] = useState<undefined | Seat>(undefined);
    const { changeAvailability } = useSeat();

    return (
        <ThemeProvider theme={theme}>
            <Box sx={{minWidth: 500}}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell align='center'>
                                Seat name
                            </TableCell>
                            <TableCell align='center'>
                                Reservations
                            </TableCell>
                            <TableCell align='center'>
                                Seat status
                            </TableCell>
                            <TableCell align='center'/>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {seats.map((seat) => (
                            <TableRow
                                hover
                                key={seat.id}
                            >
                                <TableCell align='center'>
                                    {seat.name}
                                </TableCell>
                                <TableCell align='center'>
                                    {seat.reservations.length}
                                </TableCell>
                                <TableCell align='center'>
                                    {seat.seatStatus === null ? <Typography>No date selected.</Typography> : seat.seatStatus}
                                </TableCell>
                                <TableCell style={{display: 'flex', justifyContent: 'space-around'}}>
                                    <Button onClick={() => {
                                        setClickedSeat(seat);
                                        setModalOpen(true);
                                    }}>
                                        <Typography>
                                            Details
                                        </Typography>
                                    </Button>
                                    <FormGroup>
                                        <FormControlLabel onChange={async () => {
                                            await changeAvailability(seat.id);
                                            filterByDate();
                                        }} control={<Switch checked={seat.available} />} label={!seat.available ? "Disabled" :
                                            "Enabled"} />
                                    </FormGroup>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </Box>
            <SeatDetailsModal seat={clickedSeat} open={modalOpen} setOpen={setModalOpen}/>
        </ThemeProvider>
    );
}