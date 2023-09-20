import React from "react";
import {
    Button,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
} from "@material-tailwind/react";

import { GrTransaction } from "react-icons/gr"

export function Support() {
    const [size, setSize] = React.useState(null);

    const handleOpen = (value) => setSize(value);

    return (
        <>
            <div className="">
                <button className="bg-[#EF615F] fade1 rounded-md px-4 py-2 xl:px-7 2xl:py-3 2xl:px-8 xl:py-3  md:py-2 md:px-6 hover:bg-[#dd6866]" onClick={() => handleOpen("xs")} >
                    <div className="flex gap-3 items-center tracking-tighter">

                        <h1 className="font-semibold">Support</h1>
                    </div>
                </button>
            </div>
            <Dialog
            className=""
                open={
                    size === "xs"
                }
                size={size || "md"}
                handler={handleOpen}
            >
                <div className="md:flex flex-col items-center py-2">
                    <DialogHeader className="md:flex flex-col items-center ">  <h1 className=" font-bold  text-black md:w-[100%] m-auto uppercase opacity-80 text-center text-[18px] md:text-2xl">Support Our Campaign</h1>
                    <p className="text-sm font-light">Support Our Vision. Join Us Today!</p>
                    </DialogHeader>
                </div>
                <DialogBody divider>
                    <div className="space-y-2">
                        <p className=" font-normal"> <span className="font-medium "> Bank Name: </span> <br />  Ecobank Nigeria 
                        </p>
                        <p className=" font-normal"><span className="font-medium "> Account Name: </span> <br /> Clement Adomokai 
                        </p>
                        <p className=" font-medium  ">Account No:  <span className=" text-gray-700 font-medium text-lg"> <br />  1811000017 </span> </p>
                    </div>

                </DialogBody>

                <DialogBody divider>
                    <div className="space-y-2">
                        <p className=" font-normal"> <span className="font-medium"> Bank Name: </span> <br />  Bank of America, Zelle <br />
                        </p>
                        <p className=" text-gray-700 font-medium text-lg">klemadomokai@gmail.com <br />
                        </p>
                    </div>


                </DialogBody>
                <a href="https://www.paypal.com/pools/c/8XEzohds4M" target='_blank' className="cursor-pointer py-3 hover:bg-gray-200">
                    <DialogBody divider>
                        <div className="space-y-2 flex items-center gap-3">
                            <img src="/Image/Paypal1.svg" alt="" className="" />
                            <p className="font-semibold"> Pay Via Paypal</p>
                        </div>
                    </DialogBody>
                </a>

                {/* <DialogBody divider>
                    <div className="space-y-2">
                        <p className=" font-semibold"> Bank Name:   Ecobank Nigeria <br />
                        </p>
                        <p className=" font-semibold"> Clement Adomokai <br />
                        </p>
                    </div>

                </DialogBody> */}



                <DialogFooter>
                    <Button
                        variant="gradient"
                        color="red"
                        onClick={() => handleOpen(null)}
                        className="mr-1"
                    >
                        <span>Cancel</span>
                    </Button>
                    {/* <Button
                        variant="gradient"
                        color="blue"
                        onClick={() => handleOpen(null)}
                    >
                        <span>Pay Via Paypal</span>
                    </Button> */}
                </DialogFooter>
            </Dialog>
        </>
    );
}