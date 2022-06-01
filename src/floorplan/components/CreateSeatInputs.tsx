import { Box, TextField } from '@mui/material';
import { Dispatch, SetStateAction } from 'react';

interface CreateSeatInputsProps {
    setName: Dispatch<SetStateAction<string>>,
    setXCoordinates: Dispatch<SetStateAction<number>>,
    setYCoordinates: Dispatch<SetStateAction<number>>,
    setWidth: Dispatch<SetStateAction<number>>,
    setHeight: Dispatch<SetStateAction<number>>,
}

export default function CreateSeatInputs({
    setName,
    setXCoordinates,
    setYCoordinates,
    setWidth,
    setHeight }: CreateSeatInputsProps) {
    return (
        <Box>
            <TextField onChange={(event) => setName(event.target.value)}
                label="Name" variant="outlined" />
            <TextField onChange={(event) => setXCoordinates(Number(event.target.value))}
                label="X coordinates (cm)" variant="outlined" type="number" />
            <TextField onChange={(event) => setYCoordinates(Number(event.target.value))}
                label="Y coordinates (cm)" variant="outlined" type="number" />
            <TextField onChange={(event) => setWidth(Number(event.target.value))}
                label="Width (cm)" variant="outlined" type="number" />
            <TextField onChange={(event) => setHeight(Number(event.target.value))}
                label="Height (cm)" variant="outlined" type="number" />
        </Box>
    )
}