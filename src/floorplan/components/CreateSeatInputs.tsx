import { Box, TextField } from '@mui/material';
import { Dispatch, SetStateAction } from 'react';

interface CreateSeatInputsProps {
    setName: Dispatch<SetStateAction<string>>,
    name: string,
    setXCoordinates: Dispatch<SetStateAction<number>>,
    xCoordinates: number,
    setYCoordinates: Dispatch<SetStateAction<number>>,
    yCoordinates: number,
    setWidth: Dispatch<SetStateAction<number>>,
    width: number,
    setHeight: Dispatch<SetStateAction<number>>,
    height: number,
}

export default function CreateSeatInputs({
    setName,
    name,
    setXCoordinates,
    xCoordinates,
    setYCoordinates,
    yCoordinates,
    setWidth,
    width,
    setHeight,
    height }: CreateSeatInputsProps) {
    return (
        <Box sx={{ marginTop: 2 }}>
            <TextField value={name} onChange={(event) => setName(event.target.value)}
                label="Name" variant="outlined" />
            <TextField value={xCoordinates} onChange={(event) => setXCoordinates(Number(event.target.value))}
                label="X coordinates" variant="outlined" type="number" />
            <TextField value={yCoordinates} onChange={(event) => setYCoordinates(Number(event.target.value))}
                label="Y coordinates" variant="outlined" type="number" />
            <TextField value={width} onChange={(event) => setWidth(Number(event.target.value))}
                label="Width" variant="outlined" type="number" />
            <TextField value={height} onChange={(event) => setHeight(Number(event.target.value))}
                label="Height" variant="outlined" type="number" />
        </Box>
    )
}