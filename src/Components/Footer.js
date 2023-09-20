import React from 'react';
import Logo from './Logo';

const Footer = () => {
    return (
        <footer className='bg-[#1F332B] text-white '>
           <div className="w-[85%] md:w-[80%] m-auto py-5">
            <hr className="opacity-[50%]" />
            <div className="flex justify-between items-center pt-2 ">
                <div className="">
                    <p className="text-[12px] "><Logo/></p>
                    {/* <a href="#" className=""> <img src="/Image/logo.png" alt="" className="xl:h-[38px] h-[28px] w-full m-auto 2xl:h-[45px] cursor-pointer" /></a> */}

                   
                </div>
                <div className="">
                <p className="md:text-[12px] font-light text-[7px] tracking-wide opacity-95"> &copy; 2023. Bishop Adomokhai All Right Reserved</p>
                </div>
            </div>
            </div> 
        </footer>
    );
};

export default Footer;