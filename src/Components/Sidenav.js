import gsap from 'gsap';
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Support } from './Support';
const Sidenav = () => {
    const tl = gsap.timeline();
    useEffect(() => {
        tl.from(".navbars", {
            y: -40, // Start position (above the viewport)
            opacity: 0, // Start with opacity 0
            duration: 0.5, // Duration of the animation
            ease: 'power3.easeOut', // Easing function for smooth motion
        });

        // gsap.fromTo('.navbars', { opacity: 0 }, { opacity: 1, duration: 1 });
    }, [])


    return (
        <div className='bg-[#1F332B] navbars text-white absolute w-[100%] z-10'>
            <div className="w-[80%] m-auto ">
                <div className="links  items-center space-y-5 py-10 list-none gap-4 text-sm 2xl:text-lg col-span-7 justify-end ">
                    <li className=""><Link to="/about" className=""><p className="hover:text-[#EF615F]">Mission</p></Link></li>
                    {/* <li className=""><a href="#donate" className=""><p className="hover:text-[#EF615F]">Support</p></a></li> */}
                    {/* <li className=""><a href="#contact" className=""><p className="hover:text-[#EF615F]">Contact Us</p></a></li> */}
                    {/* <Link to="/payment">    <button className="bg-[#EF615F] rounded-sm px-6 py-3 hover:bg-[#dd6866] w-full">Donate</button></Link> */}
                    <Support/>
                </div>
            </div>
        </div>
    );
};

export default Sidenav;