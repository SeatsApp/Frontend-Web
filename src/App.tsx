import { Routes, Route } from "react-router-dom";
import Header from "./appbar/Header";
import { Box, Container, CssBaseline, ThemeProvider } from "@mui/material";
import { theme } from "./theme";
import Dashboard from "./dashboard/components/Dashboard";
import React from "react";
import UserBoard from "./userboard/components/UserBoard";
import { ManageBuildings } from "./buildings/components/ManageBuildings";
import { Floorplan } from "./floorplan/components/Floorplan";
import { CreateBuilding } from "./create_building/components/CreateBuilding";

function App() {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Container>
                <Header />
                <Box style={{ marginTop: '100px' }}>
                    <Routes>
                        <Route path="/" element={<Dashboard />}/>
                        <Route path="/users" element={<UserBoard />}/>
                        <Route path="/manageBuildings" element={<ManageBuildings />} />
                        <Route path="/buildings/:buildingId" element={<CreateBuilding />} />
                        <Route path="/buildings/:buildingId/floors/:floorId/floorplan" element={<Floorplan />} />
                    </Routes>
                </Box>
            </Container>
        </ThemeProvider>
    );
}

export default App;
