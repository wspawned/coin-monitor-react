import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Monitor from './Monitor';
import WrappedDetails from './Details';

const App = () => {
    return (
        <BrowserRouter>
            <h1>Coin Monitor</h1>
            <Routes>
                <Route path="/" element={ <Monitor /> } />
                <Route path="/details/:id" element={ <WrappedDetails /> } />
            </Routes>
        </BrowserRouter>

    )
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);