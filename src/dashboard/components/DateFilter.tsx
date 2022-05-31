import {DatePicker, LocalizationProvider} from "@mui/x-date-pickers";
import {AdapterDateFns} from "@mui/x-date-pickers/AdapterDateFns";
import enLocale from "date-fns/locale/en-GB";
import {Box, Button, TextField, Typography} from "@mui/material";
import {Dispatch, SetStateAction} from "react";

interface DateFilterProps {
    startDate: string | null;
    setStartDate: Dispatch<SetStateAction<string | null>>
    filterByDate: () => void;
}

export default function DateFilter( { startDate, setStartDate, filterByDate }: DateFilterProps ) {


    return (
        <Box style={{margin: 5, display: 'flex', justifyContent: 'center'}}>
            <LocalizationProvider dateAdapter={AdapterDateFns} locale={enLocale}>
                <DatePicker label="Filter date" value={startDate} onChange={(value: string | null) => {
                    setStartDate(value);
                }} renderInput={(params) => <TextField id="date" {...params} />} />
            </LocalizationProvider>
            <Button color={'secondary'} style={{margin: 5}} variant="outlined" onClick={filterByDate}>
                <Typography>Apply filter</Typography>
            </Button>
        </Box>
    );
}