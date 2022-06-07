import {Box, TextField} from '@mui/material';
import {Dispatch, SetStateAction} from 'react';

interface CreateSeatInputsProps {
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
                                             setXCoordinates,
                                             xCoordinates,
                                             setYCoordinates,
                                             yCoordinates,
                                             setWidth,
                                             width,
                                             setHeight,
                                             height
                                         }: CreateSeatInputsProps) {
    return (
        <Box sx={{display: 'flex', flexWrap: 'wrap', marginTop: 2}}>
            <TextField sx={{margin: 2}} value={xCoordinates}
                       onChange={(event) => setXCoordinates(Number(event.target.value))}
                       label="X coordinates" variant="outlined" type="number"/>
            <TextField sx={{margin: 2}} value={yCoordinates}
                       onChange={(event) => setYCoordinates(Number(event.target.value))}
                       label="Y coordinates" variant="outlined" type="number"/>
            <TextField sx={{margin: 2}} value={width} onChange={(event) => setWidth(Number(event.target.value))}
                       label="Width" variant="outlined" type="number"/>
            <TextField sx={{margin: 2}} value={height} onChange={(event) => setHeight(Number(event.target.value))}
                       label="Height" variant="outlined" type="number"/>
        </Box>
    )
}