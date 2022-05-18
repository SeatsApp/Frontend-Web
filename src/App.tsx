import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import HomePage from "./HomePage";

function App() {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
        </Routes>
    );
}

export default App;
