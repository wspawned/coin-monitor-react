import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Monitor from './Monitor';

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={ <Monitor /> } />
                
            </Routes>
        </BrowserRouter>

    )
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);