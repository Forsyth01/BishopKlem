import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const About = () => {
 

    return (
        <div>
            <div className="w-[80%] m-auto md:py-20 py-10" id='about'>
                <div className="md:flex gap-10 items-center py-10 xl:py-0 space-y-5 md:space-y-0">
                    <div className="xl:w-[40%] md:w-[100%] md:flex hidden">
                        <img src="/Image/about.png" alt="" className=" rounded-xl 2xl:h-[480px] xl:h-[420px] md:h-[320px] m-auto object-cover" />
                    </div>
                    <div className="xl:w-[50%] space-y-3 2xl:space-y-3">
                        <h1 className="text-3xl xl:text-3xl md:text-2xl 2xl:text-4xl md:leading-normal font-semibold text-[#1F332B] ">Discover Our Story: <span className='text-[#EF615F]'>Passion,</span><br className='md:flex 2xl:hidden hidden' /> Purpose, Progress</h1>
                        <p className="text-[16px] md:text-[14px] xl:text-[16px] 2xl:text-[18px] leading-normal 2xl:leading-relaxed xl:leading-relaxed text-justify md:text-left">Welcome to "Restoration 2024"! Our mission is to lead Edo State towards a brighter future, where prosperity and progress reign supreme. We are committed to restoring our beloved state to its full potential in the year 2024 and beyond.</p>
                        {/* <button className="bg-[#EF615F] rounded-sm px-6 py-2 hover:bg-[#dd6866]">Read more</button> */}
                        {/* <div className="w-fit">
                            <p className="text-[#EF615F itali cursor-pointer hover:text-[#d67472] font-medium md:text-[16px] xl:text-[13px] 2xl:text-lg"> <Link to="/about">   Read more
                            </Link></p>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;