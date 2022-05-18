import React, {useEffect} from "react"
import useLogin from "../hooks/useLogin";
import {Box, Typography} from "@mui/material";
import {OpenURLButton} from "./OpenUrlButton";
import {backendUrl} from "../../config/EnvironmentConfig";

interface LoginContainerProps {
    children: JSX.Element;
}

interface LinkingProps {
    url: string;
}

export const LoginContainer = ({children}: LoginContainerProps) => {
    const {loggedIn, checkLoggedIn} = useLogin();

    useEffect(() => {
        const url = window.location.href;
        if (url !== null) {
            let jwtToken: string = url.split("=")[1]
            if (jwtToken !== undefined) {
                if (jwtToken.includes("#"))
                    jwtToken = jwtToken.substring(0, jwtToken.length - 1)
                localStorage.setItem("JwtToken", jwtToken)
            }
        }
        checkLoggedIn();
    }, []);

    const loginUrl = backendUrl + "/api/login/web";
    if (loggedIn) {
        return children
    } else {
        return (
            <Box style={{display: 'flex', flexDirection: 'column' ,alignItems: 'center', justifyContent: 'center', position: 'relative', height: '50%'}}>
                <Typography style={{margin: 20, fontSize: 20, textAlign: 'center'}}>You have to login with your cronos
                    account.</Typography>
                <OpenURLButton url={loginUrl}/>
            </Box>
        )
    }
}