import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import Step1 from './pages/Step1/step1.js';
import Step2 from './pages/Step2/step2.js'; 

function Router() { 
    return ( 
        <BrowserRouter>
            <Routes> 
                <Route path="/" element={<Step1/>}/>
                <Route path="/step2" element={<Step2/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default Router; 