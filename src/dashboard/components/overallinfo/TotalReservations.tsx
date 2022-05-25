import { Avatar, Card, CardContent, Grid, Typography } from '@mui/material';
import PeopleIcon from '@mui/icons-material/PeopleOutlined';
import { Seat } from '../../types/Seat';
import { useEffect, useState } from 'react';

interface TotalReservationProps {
    seats: Seat[];
}

export default function TotalReservations({ seats }: TotalReservationProps) {
    const [totalReservations, setTotalReservations] = useState<number>(0);

    useEffect(() => {
        let totalRes = 0;
        seats.forEach(seat => {
            totalRes += seat.reservations.length;
        });
        setTotalReservations(totalRes);
    }, [seats]);

    return (
        <Card style={{margin: 10}}>
            <CardContent>
                <Grid container spacing={3} sx={{ justifyContent: 'space-between' }}>
                    <Grid item>
                        <Typography
                            color="primary"
                            gutterBottom
                            variant="overline"
                        >
                            TOTAL RESERVATIONS
                        </Typography>
                        <Typography
                            color="primary"
                            variant="h4"
                        >
                            {totalReservations}
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Avatar
                            sx={{
                                backgroundColor: 'primary.main',
                                height: 56,
                                width: 56
                            }}
                        >
                            <PeopleIcon />
                        </Avatar>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    );


}