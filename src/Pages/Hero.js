import React, { useEffect } from 'react';
import Para from '../Components/Para';
import gsap from 'gsap';

const Hero = () => {
    useEffect(() => {
        gsap.fromTo('.fade2', { opacity: 0, scale:-0.5 }, { opacity: 1, duration: 0.9, scale:1});
        gsap.fromTo('.fade1', { opacity:0}, { opacity:1, duration: 1, delay:1 });
    }, []);
    return (
        <div>
            <div className="bg-[#1F332B]">
                <div className="m-auto w-[85%] md:w-[80%] py-5">
                    <div className="md:grid grid-cols-4 gap-10 items-center justify-between space-y-16 md:space-y-0">
                        <div className="text-white font-medium col-span-2">
                            <div className="fade">
                            {/* <h1 className="text-5xl">Vote Klem. For Governor Of Edo State</h1> */}
                            <p className="text-[12px] 2xl:text-[14px] xl:font-light pt-1 text-[#EF615F] fade1">-Empowering Progress, Together</p>
                            <h1 className="xl:text-4xl md:text-3xl text-[38px] 2xl:text-5xl fade2 "> Bishop Dr. Adomokhai for Edo State Governor 2024 </h1>
                            {/* <sapn className="flex"> <img src="/Image/tick.png" alt="" className="" /></sapn> */}
                            {/* <h1 className="xl:text-5xl text-[38px] 2xl:text-[65px] fade2 ">Building a Better Tomorrow, Together.</h1> */}
                            {/* <p className="text-[12px] pt-2 font-light">Join us in shaping a brighter future. Your contribution is a catalyst for change. Together, we can make a real difference</p> */}
                            </div>
                            <div className="">
                                <p className="pt-2 font-light text-[12px] 2xl:text-lg absolute "><Para /></p>
                            </div>
                        </div>
                        <div className="col-span-2 ">
                            <img src="/Image/hero1.jpg" alt="" className="fade2 xl:h-[450px]  rounded-xl  h-[400px] w-full md:w-fit md:h-[350px] 2xl:h-[550px] object-cover m-auto md:flex hidden" />
                            <img src="/Image/smallscreen.jpg" alt="" className="rounded-t fade2 xl:h-[500px] h-[400px] w-full md:w-fit md:h-[320px] 2xl:h-[800px] object-fill m-auto md:hidden flex" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;