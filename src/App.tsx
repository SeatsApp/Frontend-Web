import {Routes, Route} from "react-router-dom";
import Header from "./appbar/Header";
import {Box, Container, CssBaseline, ThemeProvider} from "@mui/material";
import {theme} from "./theme";
import Dashboard from "./dashboard/components/Dashboard";
import React from "react";

function App() {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Container>
                <Header/>
                <Box style={{marginTop: '100px'}}>
                    <Routes>
                        <Route path="/" element={<Dashboard />}/>
                    </Routes>
                </Box>
            </Container>
        </ThemeProvider>
    );
}

export default App;
