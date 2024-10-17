// src/App.js
import React from 'react';
import Navbar from './components/Navbar';
import './index.css';
import Home from './sections/Home';
import About from './sections/About';
import Services from './sections/Services';
import Contact from './sections/Contact';
import "./App.css"  

function App() {
    return (
        <>
         
            <Navbar />
            <div id="home" >
                <Home/>
            </div>
            <div id="about" >
                <About/>
            </div>
            <div id="services" >
                <Services/>
            </div>
            <div id="contact" >
                <Contact/>
            </div>
            
           
            
        </>
    );
}

export default App;
