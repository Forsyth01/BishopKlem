import React from 'react';
import { Link } from 'react-router-dom';
import { Support } from '../Components/Support';

const Donate = () => {
    return (
        <div className='bg-[#F6F4F4 py-10 ' id='donate'>
            <div className="md:w-[80%] m-auto md:rounded-xl bg-[#1F332B] ">
                <div className="py-20  md:rounded-xl gap-10 space-y-10 xl:space-y-0 w-[80%] m-auto md:w-[100%]">
                    <div className="text-center md:space-y-4 space-y-3 w-[100%]">
                        <h1 className="text-3xl xl:text-3xl 2xl:text-4xl md:text-2xl font-semibold text-white">Why Donate?</h1>
                        <p className="text-[13px] 2xl:text-[16px] xl:text-[14px] md:text-[12px] leading-relaxed font-light 2xl:font-light text-white md:w-[70%]  md:m-auto">Your support is crucial to our campaign's success. Every contribution, no matter how small, helps us take one step closer to achieving our goals. Your donation will directly fund critical campaign activities</p>
                        <div className="text-white">
                            {/* <Link to="/payment"> <button className="bg-[#EF615F] rounded px-8 py-3 md:px-8 md:py-2 xl:py-3 2xl:px-10 2xl:py-3 hover:bg-[#dd6866]">Donate</button></Link> */}
                            <Support/>
                        </div>
                    </div>
                    {/* <div className=" text-white opacity-60  col-span-3 hidden">
                        <ul className="list-disc space-y-6 md:space-y-4 2xl:space-y-6 flex flex-col justify-center xl:w-[85%] m-auto md:text-[12px] xl:text-[14px] 2xl:text-[16px] text-sm md:text-lg">
                            <li className="">Reaching out to voters through advertising and outreach programs.</li>
                            <li className="">Organizing rallies, town hall meetings, and events to connect with the community.</li>
                            <li className="">Creating and distributing campaign materials to educate voters about our policies and values.</li>
                            <li className="">By donating today, you're investing in a better future for our community and our country. Your generosity makes our campaign possible.</li>
                            <li className="">Covering essential campaign expenses like staff salaries, travel, and technology.</li>
                            <li className="">Mobilizing volunteers to spread our message and get out the vote.</li>
                        </ul>
                        <div className="mt-5">

                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    );
};

export default Donate;