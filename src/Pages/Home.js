import { Route, Routes } from 'react-router-dom';
import React from 'react';
import Navbar from '../Components/Navbar';
import Hero from './Hero';
import Donate from './Donate';
import About from './About';
import Contact from './Contact';
import Footer from '../Components/Footer';


const Home = () => {
    return (
        <div>
            <div className="">
                <div className="grow ">
                    <Hero />
                    <About />
                    <Donate />
                    <Contact />
                </div>
            </div>
        </div>
    );
};

export default Home;