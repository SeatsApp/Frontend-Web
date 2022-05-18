import React, {useCallback} from "react";
import {Button, Typography} from "@mui/material";

interface OpenUrlButtonProps {
    url: string;
}

export const OpenURLButton = ({url}: OpenUrlButtonProps) => {

    const handlePress = useCallback(async () => {
        await window.location.assign(url);
    }, [url]);

    return <Button color={"primary"} variant='contained'
                   onClick={() => handlePress()}><Typography>Login</Typography></Button>;
};