import './App.css';
import { Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import Header from "./appbar/Header";
import { Box, Container } from "@mui/material";

function App() {
    return (
        <Box>
            <Header />
            <Container style={{ marginTop: '80px' }} maxWidth='xl'>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                </Routes>
            </Container>
        </Box>
    );
}

export default App;
