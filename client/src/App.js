import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// App.js
import Login from './components/Login';
import DbAlter from './components/DbAlter';


const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Login/>} />
                <Route path="/db-alter" element={<DbAlter/>} /> {/* New route for DB altering */}
                {/* Add other routes as necessary */}
            </Routes>
        </Router>
    );
};

export default App;
