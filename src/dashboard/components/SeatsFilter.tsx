import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import enLocale from "date-fns/locale/en-GB";
import { Box, Button, TextField, Typography } from "@mui/material";
import { Dispatch, SetStateAction } from "react";
import DropDownBuildingFloorFilter from "./DropDownBuildingFloorFilter";

interface DateFilterProps {
    startDate: string | null;
    setStartDate: Dispatch<SetStateAction<string | null>>

    buildingId: number,
    floorId: number,
    setBuildingId: Dispatch<SetStateAction<number>>,
    setFloorId: Dispatch<SetStateAction<number>>,

    filterSeats: () => void;
}

export default function SeatsFilter({ startDate, setStartDate, buildingId,
    floorId, setBuildingId, setFloorId, filterSeats }: DateFilterProps) {


    return (
        <Box >
            <Box>
                <LocalizationProvider dateAdapter={AdapterDateFns} locale={enLocale}>
                    <DatePicker label="Filter date" value={startDate} onChange={(value: string | null) => {
                        setStartDate(value);
                    }} renderInput={(params) => <TextField id="date" {...params} />} />
                </LocalizationProvider>
                <DropDownBuildingFloorFilter buildingId={buildingId} floorId={floorId}
                    setBuildingId={setBuildingId} setFloorId={setFloorId} />
            </Box>
            <Box sx={{display:"flex", justifyContent:"end"}}>
                <Button color={'secondary'} style={{ margin: 5 }} variant="outlined" onClick={filterSeats}>
                    <Typography>Apply filter</Typography>
                </Button>
            </Box>
        </Box>
    );
}