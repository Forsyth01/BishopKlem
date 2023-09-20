import React, { useContext, useEffect, useState } from 'react';
import Logo from './Logo';
import { HiOutlineMenuAlt3 } from "react-icons/hi"
import gsap from 'gsap';
import Sidenav from './Sidenav';
import { Link } from 'react-router-dom';
import { SideNavToggle } from '../Contexts/SideNavToggle';
import { Support } from './Support';

const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleSideNav = () => {
        setIsOpen(!isOpen);
        gsap.to('.sidenav', { x: isOpen ? '-100%' : '0%', duration: 0.3 });
    };


    useEffect(() => {
        gsap.fromTo('.navbar', { opacity: 0 }, { opacity: 1, duration: 1 });
    }, []);

    return (
        <div> 
            <div className="bg-[#1F332B]">
                <div className="w-[85%] md:w-[80%] m-auto navbar">
                    <div className=" flex grid-cols-12 justify-between items-center  py-4">
                        <div className="logo col-span-5">
                            {/* <h1 className="text-[#EF615F logo italic xl:text-xl  text-white font-bol 2xl:text-xl cursor-pointer">Bishop Adomokhai</h1> */}
                            <Link to="/"><Logo /></Link>
                        </div>
                        <div className="links  items-center text-white list-none gap-4 text-sm xl:text-[14px] md:text-[12px] 2xl:text-[16px] col-span-7 justify-end md:flex hidden">
                            <li className=""><a href="#about" className=""><p className="hover:text-[#EF615F]">About Us</p></a></li>
                            {/* <li className=""><a href="#donate" className=""><p className="hover:text-[#EF615F]">Support</p></a></li> */}
                            <li className=""><a href="#contact" className=""><p className="hover:text-[#EF615F]">Contact Us</p></a></li>
                            {/* <Link to="/payment"  >  <button className="bg-[#EF615F] 2xl:py-3 rounded-md px-6 py-2 hover:bg-[#dd6866]">Donate</button></Link> */}
                            <Support/>
                        </div>
                        <div className="flex md:hidden col-span-7  text-white">
                            {/* <HiOutlineMenuAlt3 className='text-white text-2xl' onClick={toggleSideNav} /> */}
                            {/* <Link to="/payment"  >  <button className="bg-[#EF615F] fade1 rounded-md px-4 py-2 hover:bg-[#dd6866]">Support</button></Link> */}
                            <Support/>
                        </div>
                    </div>
                    {/* <hr className="h-[1px] opacity-25 md:hidden flex " /> */}
                </div>
            </div>
            {isOpen && <div className="md:hidden flex">
                <Sidenav />
            </div>}
        </div>
    );
};

export default Navbar;