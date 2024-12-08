import './App.css';
import React, { Component, element } from 'react'
import Navbar from './components/Navbar'

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Maps from './pages/Maps';
import Footer from './components/Footer'
import Houses from './pages/Houses';
import Plots from './pages/Plots';
import Projects from './pages/Projects';
import Supplies from './pages/Supplies';
import Login from './pages/Login';
import Services from './services/Service'
import UpdatePassword from './pages/UpdatePassword';
import ManageSellers from './components/sellers/ManageSellers';

function App() {
    let [authenticated,setAuthenticated]=React.useState(false)

    React.useEffect(()=>{
        if (!Services.isAuthenticated()) {
            setAuthenticated(false)
        }else{
            setAuthenticated(true)
        }
    },[])
    return (
        <div>
            <Router>
                {authenticated ?
                    <Navbar />
                    : ''
                }

                <Routes>
                    <Route exact path="/" element={<Houses />} />
                    <Route exact path="/login" element={<Login />} />
                    <Route exact path="/maps" element={<Maps />} />
                    <Route exact path="/houses" element={<Houses />} />
                    <Route exact path="/plots" element={<Plots />} />
                    <Route exact path="/projects" element={<Projects />} />
                    <Route exact path="/supplies" element={<Supplies />} />
                    <Route exact path="/update-password" element={<UpdatePassword />} />
                    <Route exact path="/manage-sellers" element={<ManageSellers />} />
                </Routes>
                <Footer />
            </Router>

        </div>
    )

}

export default App;














