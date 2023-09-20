import React from 'react';

const Paypal = () => {
    return (
        <div>
            <div className="bg-[#e8f0fe  rounded-xl ">
                <div className="md:flex items-center ">
                    <div className="md:bg-[#e8f0fe] p-5 w-[50%]">
                        <div className="my-4">
                            <h1 className="font-medium text-xl">Payment Option</h1>
                        </div>
                        <div className="ml- space-y-2">
                            <div className=" bg-white hover:bg-[#f7f6f6] py-5 ">
                                <div className="flex items-center ml- cursor-pointer ml-5 tracking-tighter">
                                    <h1 className="font-semibold">Bank Transfer</h1>
                                </div>
                            </div>
                            <div className="bg-white hover:bg-[#f7f6f6]  px-5">
                                <a href="https://www.paypal.com/pools/c/8XEzohds4M" target='_blank' className=" cursor-pointer"><img src="/Image/paypal.svg" alt="" className="h-[60px]" /></a>
                            </div>
                        </div>
                    </div>

                    {/* <div className="w-full">
                        <img src="/Image/standing.jpg" alt="" className="h-[800px] w-full object-cover" />
                    </div> */}
                </div>
            </div>
        </div>
    );
};

export default Paypal;