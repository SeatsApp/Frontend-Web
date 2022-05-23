import React, {useEffect} from "react"
import useLogin from "../hooks/useLogin";
import {
    Box, createTheme,
    CssBaseline,
    Grid,
    Paper, ThemeProvider,
    Typography
} from "@mui/material";
import {OpenURLButton} from "./OpenUrlButton";
import {backendUrl} from "../../config/EnvironmentConfig";

interface LoginContainerProps {
    children: JSX.Element;
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

    const theme = createTheme();

    const loginUrl = backendUrl + "/api/admin/login";
    if (loggedIn) {
        return children
    } else {
        return (
            <ThemeProvider theme={theme}>
                <Grid container component="main" sx={{ height: '100vh' }}>
                    <CssBaseline />
                    <Grid
                        item
                        xs={false}
                        sm={4}
                        md={7}
                        sx={{
                            backgroundImage: 'url(https://source.unsplash.com/random)',
                            backgroundRepeat: 'no-repeat',
                            backgroundColor: (t) =>
                                t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                        }}
                    />
                    <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                        <Box style={{display: 'flex', flexDirection: 'column' ,alignItems: 'center', justifyContent: 'center', position: 'relative', height: '50%'}}>
                            <Typography style={{margin: 20, fontSize: 20, textAlign: 'center'}}>You have to login with your cronos
                                account.</Typography>
                            <OpenURLButton url={loginUrl}/>
                        </Box>
                    </Grid>
                </Grid>
            </ThemeProvider>
        )
    }
}