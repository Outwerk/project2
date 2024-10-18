// src/App.js
import React from 'react';
import Navbar from './components/Navbar';
import './index.css';
import Home from './sections/Home';
import About from './sections/About';
import LoanProducts from './sections/LoanProducts';
import Contact from './sections/Contact';
import "./App.css"
import WhoWeFund from './sections/WhoWeFund';
import HowItWorks from './sections/HowItWork';
import Requirements from './sections/Requirements';
import Footer from './components/Footer';

function App() {
    return (
        <>

            <Navbar />

            <Home />
            <WhoWeFund />
            <HowItWorks />
            <About />
            <LoanProducts />
            <Requirements />
            
            <Footer />


        </>
    );
}

export default App;
