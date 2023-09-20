import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import Form from './Form';

const Payment = () => {
    return (
        <div>
            <Navbar />
            <div className="m-auto w-[85%] md:w-[80%]">
                <Form />
            </div>
            <Footer />
        </div>
    );
};

export default Payment;