import { Avatar, Card, CardContent, Grid, Typography } from '@mui/material';
import { Seat } from '../../types/Seat';
import { useEffect, useState } from 'react';
import DesktopMacIcon from '@mui/icons-material/DesktopMac';

interface FreeSeatsProps {
    seats: Seat[];
}

export default function FreeSeats({ seats }: FreeSeatsProps) {
    const [freeSeats, setFreeSeats] = useState<string>("--");

    useEffect(() => {
        if (seats[0] !== undefined && seats[0].seatStatus !== null) {
            let totalFree = 0;
            seats.forEach(seat => {
                if (seat.reservations.length < 1) {
                    totalFree++;
                }
            });
            setFreeSeats(totalFree.toString());
        } else {setFreeSeats("--")}
    }, [seats]);

    return (
        <Card style={{ margin: 10 }}>
            <CardContent>
                <Grid container spacing={3} sx={{ justifyContent: 'space-between' }}>
                    <Grid item>
                        <Typography
                            color="textSecondary"
                            gutterBottom
                            variant="overline"
                        >
                            FREE SEATS
                        </Typography>
                        <Typography
                            color="textPrimary"
                            variant="h4"
                        >
                            {freeSeats}
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Avatar
                            sx={{
                                backgroundColor: 'success.main',
                                height: 56,
                                width: 56
                            }}
                        >
                            <DesktopMacIcon />
                        </Avatar>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    );
}