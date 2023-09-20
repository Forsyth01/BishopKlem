import React, { useEffect } from 'react';
import Navbar from './Navbar';
import Modal, { Modals } from './Modal';
import Footer from './Footer';
import { useLocation } from 'react-router-dom';

const Pay = () => {
    
    const location = useLocation();
    // Scroll to top on route change
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);
    return (
        <div>
            <div className="flex items-center justify-center flex-col xl:h-[60vh] md:h-[100vh] h-[80vh]">
                <div className="bg-[#e8f0fe] p-5 w-[80%] md:w-[50%] xl:w-[30%]">
                    <div className="my-4">
                        <h1 className="font-bold text-xl md:text-3xl">Payment Option</h1>
                    </div>
                    <div className="ml- space-y-2">
                        <div className=" ">
                            <div className="">
                                <Modals />
                            </div>
                        </div>
                        <div className="bg-white hover:bg-[#f7f6f6] md:py-1  px-5">
                            <a href="https://www.paypal.com/pools/c/8XEzohds4M" target='_blank' className=" cursor-pointer"><img src="/Image/paypal.svg" alt="" className="h-[64px] ml-5" /></a>
                        </div>
                    </div>
                </div>

                <div className="">
                    {/* <img src="/Image/standing.jpg" alt="" className="h-[800px] w-full object-cover" /> */}
                </div>
            </div>
        </div>
    );
};

export default Pay;