import React, {useCallback} from "react";
import {Button, Typography} from "@mui/material";
import LockOpenIcon from '@mui/icons-material/LockOpen';

interface OpenUrlButtonProps {
    url: string;
}

export const OpenURLButton = ({url}: OpenUrlButtonProps) => {

    const handlePress = useCallback(async () => {
        window.location.assign(url);
    }, [url]);

    return <Button sx={{padding: 4}} startIcon={<LockOpenIcon />} color={'info'} variant='contained'
                   onClick={() => handlePress()}><Typography variant='h6'>Connect with your Cronos account.</Typography></Button>;
};