import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/home/';
import Navbar from './components/Navbar';

function App() {

    return (
        <div>
            <Router>
                <div>
                    <Navbar />
                    <Routes>
                        <Route path="/my-portfolio" element={<Home />}></Route>
                        <Route path="*" element={<div>404 Not Found</div>}></Route>
                    </Routes>
                </div>
            </Router>
        </div>
    )
}

export default App
