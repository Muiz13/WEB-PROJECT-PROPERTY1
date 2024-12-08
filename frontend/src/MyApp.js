import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Properties from './pages/Properties';
import Contact from './pages/Contact';
import Maps from './pages/Maps';
import Footer from './components/Footer';
import AboutUs from './pages/About Us';
import AboutSellers from './pages/AboutSeller'; // Import the AboutSellers page
import DetailProperty from './components/DetailProperty';
import Services from './Services/Services';
import Supplies from './pages/Supplies';

function App() {
    let [detailedProperty, setDetailedProperty] = React.useState({});
    let mobileStyles = {
        width: "80vh"
    };

    return (
        <div className='col-12' style={window.innerWidth <= 500 ? mobileStyles : {}}>
            <Router>
                <Navbar />
                <Routes>
                    <Route exact path="/" element={<Properties />} />
                    <Route exact path="/properties" element={<Properties />} />
                    <Route exact path="/contact" element={<Contact />} />
                    <Route exact path="/maps" element={<Maps />} />
                    <Route exact path="/supplies" element={<Supplies />} />
                    <Route exact path="/aboutUs" element={<AboutUs />} />
                    <Route exact path="/aboutSeller" element={<AboutSellers />} /> {/* Add About Sellers route */}
                    <Route exact path="/properties/:id" element={<DetailProperty />} />
                </Routes>
                <Footer />
            </Router>
        </div>
    );
}

export default App;