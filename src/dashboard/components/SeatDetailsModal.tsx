import {Box, IconButton, Modal, Paper} from "@mui/material";
import {Dispatch, SetStateAction, useEffect, useState} from "react";
import {Seat} from "../../shared/types/Seat";
import {DayPilot, DayPilotCalendar} from "daypilot-pro-react";
import CloseIcon from '@mui/icons-material/Close';


interface SeatDetailsModalProps {
    open: boolean,
    setOpen: Dispatch<SetStateAction<boolean>>,
    seat: undefined | Seat
}

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '80%',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
};

export default function SeatDetailsModal({open, setOpen, seat}: SeatDetailsModalProps) {
    const [events, setEvents] = useState<DayPilot.EventData[]>([]);

    const handleClose = () => {
        setOpen(false);
    }


    function getEvents() {
        let updatedEvents = [];
        if (seat !== undefined) {
            for (let i = 0; i < seat.reservations.length; i++) {
                const reservation = seat.reservations[i];
                updatedEvents[i] = {
                    id: reservation.id,
                    text: reservation.user.fullName,
                    start: formatDateTime(reservation.startDateTime),
                    end: formatDateTime(reservation.endDateTime)
                }
            }
        }
        setEvents(updatedEvents);
    }

    function formatDateTime(dateTime: string): string {
        const splittedDate = dateTime.split(' ')[0].split('-');
        const splittedTime = dateTime.split(' ')[1].split(':');

        splittedDate.forEach((datePart,i) => {if (datePart.length < 2) {splittedDate[i] = "0" + datePart}});

        splittedTime.forEach((timePart,i) => {if (timePart.length < 2) {splittedTime[i] = "0" + timePart}});

        return splittedDate[0] + "-" + splittedDate[1] + "-" + splittedDate[2] + " " +
            splittedTime[0] + ":" + splittedTime[1] + ":" + splittedTime[2];
    }

    useEffect(() => {
        getEvents();
    }, [seat]);

    return (
        <Modal
            open={open}
            onClose={handleClose}
        >
            <Paper sx={style} elevation={6}>
                <Box sx={{display: 'flex', justifyContent: 'flex-end', marginBottom: 2}}>
                    <IconButton onClick={handleClose}>
                        <CloseIcon/>
                    </IconButton>
                </Box>
                <DayPilotCalendar
                    events={events}
                    viewType="WorkWeek"
                    eventMoveHandling={"Disabled"}
                />
            </Paper>
        </Modal>
    );
}