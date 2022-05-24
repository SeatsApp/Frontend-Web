import {DatePicker, LocalizationProvider} from "@mui/x-date-pickers";
import {AdapterDateFns} from "@mui/x-date-pickers/AdapterDateFns";
import enLocale from "date-fns/locale/en-GB";
import {Box, Button, TextField, Typography} from "@mui/material";
import {Dispatch, SetStateAction, useState} from "react";

interface DateFilterProps {
    apiString: string,
    setApiString: Dispatch<SetStateAction<string>>,
    refetchSeats: (apiString: string) => void
}

export default function DateFilter( { apiString, setApiString, refetchSeats }: DateFilterProps ) {
    const [startDate, setStartDate] = useState<string | null>(null);

    function filterByDate() {
        const value = document.getElementById('date')?.getAttribute('value');
        if (value === "") {
            setStartDate(null);
            setApiString(`/api/seats`);
        } else {
            const date = value?.split('/')[2] + "-" + value?.split('/')[1] + "-" + value?.split('/')[0];
            setApiString(`/api/seats/reservations/date/` + date);
        }
        refetchSeats(apiString);
    }

    return (
        <Box style={{margin: 5, display: 'flex', justifyContent: 'center'}}>
            <LocalizationProvider dateAdapter={AdapterDateFns} locale={enLocale}>
                <DatePicker label="Filter date" value={startDate} onChange={(value: string | null) => {
                    setStartDate(value);
                }} renderInput={(params) => <TextField id="date" {...params} />} />
            </LocalizationProvider>
            <Button style={{marginLeft: 5}} variant="contained" onClick={filterByDate}><Typography>Apply filter</Typography></Button>
        </Box>
    );
}