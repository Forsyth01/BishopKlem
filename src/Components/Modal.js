import React from "react";
import {
    Button,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
} from "@material-tailwind/react";

import {GrTransaction} from "react-icons/gr"

export function Modals() {
    const [size, setSize] = React.useState(null);

    const handleOpen = (value) => setSize(value);

    return (
        <>
            <div className="">
                <button className="bg-white w-full hover:bg-[#f7f6f6] py-5 md:py-6 " onClick={() => handleOpen("xs")} >
                    <div className="flex gap-3 items-center ml- cursor-pointer ml-9 tracking-tighter">
                        <GrTransaction/>
                        <h1 className="font-semibold">Bank Transfer</h1>
                    </div>
                </button>
            </div>
            <Dialog
                open={
                    size === "xs"
                }
                size={size || "md"}
                handler={handleOpen}
            >
                {/* <div className="">
                    <DialogHeader >  <h1 className="text-center font-bold text-xl py-2 text-black">Bank Transfer</h1></DialogHeader>
                </div> */}
                <DialogBody divider>
                    <div className="space-y-2">
                        <p className="text-center font-semibold"> Bank Name:   Ecobank Nigeria <br />
                        </p>
                        <p className="text-center font-semibold"> Clement Adomokai <br />
                        </p>
                        <p className="text-center font-semibold md:text-2xl text-xl text-gray-800"> Account No. 1811000017</p>
                    </div>
                </DialogBody>


                {/* <DialogFooter>
                    <Button
                        variant="text"
                        color="red"
                        onClick={() => handleOpen(null)}
                        className="mr-1"
                    >
                        <span>Cancel</span>
                    </Button>
                    <Button
                        variant="gradient"
                        color="green"
                        onClick={() => handleOpen(null)}
                    >
                        <span>Confirm</span>
                    </Button>
                </DialogFooter> */}
            </Dialog>
        </>
    );
}