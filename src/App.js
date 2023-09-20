import React from 'react';
import './index.css';
import Home from './Pages/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Readmore from './Pages/Readmore';
import Pay from './Components/Pay';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';


function App() {
  return (
    <>
      <Navbar />
      <div className='min-h-[100vh] w-[100%] flex flex-col '>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<Readmore />} />
          <Route path="/payment" element={<Pay />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
