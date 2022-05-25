import { Avatar, Card, CardContent, Grid, Typography } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import { Seat } from '../../types/Seat';
import { useEffect, useState } from 'react';

interface CheckedInProps {
    seats: Seat[];
}

export default function CheckedInSeats({ seats }: CheckedInProps) {
    const [checkedInSeats, setCheckedInSeats] = useState<string>("--");

    useEffect(() => {
        if (seats[0] !== undefined && seats[0].seatStatus !== null) {
            let totalChecks = 0;
            seats.forEach(seat => {
                seat.reservations.forEach(res => {
                    if (res.checkedIn) {
                        totalChecks++;
                    }
                })
            });
            setCheckedInSeats(totalChecks.toString());
        } else {setCheckedInSeats("--")}
    }, [seats]);

    return (
        <Card style={{ margin: 10 }}>
            <CardContent>
                <Grid container spacing={3} sx={{ justifyContent: 'space-between' }}>
                    <Grid item>
                        <Typography
                            color="primary"
                            gutterBottom
                            variant="overline"
                        >
                            CHECKED IN SEATS
                        </Typography>
                        <Typography
                            color="primary"
                            variant="h4"
                        >
                            {checkedInSeats}
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Avatar
                            sx={{
                                backgroundColor: 'secondary.main',
                                height: 56,
                                width: 56
                            }}
                        >
                            <CheckIcon />
                        </Avatar>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    );
}