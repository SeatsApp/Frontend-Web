import {
    Box,
    Button,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    ThemeProvider,
    Typography
} from '@mui/material';
import { Seat } from '../types/Seat';
import { theme } from '../../theme';
import SeatDetailsModal from "./SeatDetailsModal";
import {useState} from "react";

interface SeatListProps {
    seats: Seat[]
}

export default function SeatList({ seats }: SeatListProps) {
    const [modalOpen, setModalOpen] = useState<boolean>(false);
    const [clickedSeat, setClickedSeat] = useState<undefined | Seat>(undefined);

    return (
        <ThemeProvider theme={theme}>
            <Box sx={{ minWidth: 500 }}>
                <Table>
                    <TableHead>
                        <TableRow >
                            <TableCell align='center'>
                                Seat name
                            </TableCell >
                            <TableCell align='center'>
                                Reservations
                            </TableCell>
                            <TableCell align='center'>
                                Seat status
                            </TableCell>
                            <TableCell align='center' />
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
                                    {seat.seatStatus === null ? <Typography>--</Typography> : seat.seatStatus}
                                </TableCell>
                                <TableCell align='center'>
                                    <Button onClick={() => {
                                        setClickedSeat(seat);
                                        setModalOpen(true);
                                    }}>
                                        <Typography>
                                            Details
                                        </Typography>
                                    </Button>
                                    <Button>
                                        <Typography>
                                            Delete
                                        </Typography>
                                    </Button>
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