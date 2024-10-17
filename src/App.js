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
            <div id="home" >
                <Home/>
            </div>
            <div id="whoWeFund" >
                <WhoWeFund/>
            </div>
            <div id="howItWork" >
                <HowItWorks/>
            </div>
            <div id="about" >
                <About/>
            </div>
            <div id="loanProducts" >
                <LoanProducts/>
            </div>
            {/* <div id="contact" >
                <Contact/>
            </div> */}
            <div id="requirement" >
                <Requirements/>
            </div>
            <Footer/>
           
            
        </>
    );
}

export default App;
