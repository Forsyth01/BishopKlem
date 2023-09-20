import React from 'react';
import {MdPhoneInTalk} from "react-icons/md"
import {BiMailSend, BiLogoFacebook, BiLogoInstagram} from "react-icons/bi"
import {LiaTelegram} from "react-icons/lia"
import {LiaLinkSolid} from "react-icons/lia"

const Contact = () => {
    return (
        <div>
            <div className="w-[80%] m-auto py-20 space-y-5" id='contact'>
                <div className="">
                    <h1 className="text-2xl md:text-2xl xl:text-3xl 2xl:text-4xl md:leading-normal font-medium text-[#1F332B]">For More Enquiry? <br/>Feel Free to reach out to us</h1>
                </div>
                <div className="space-y-2">
                {/* <div className="flex items-center gap-3"> 
                <MdPhoneInTalk className='xl:text-2xl text-2xl '/>
                    <p className="xl:text-[16px] 2xl:text-[18px] md:text-[14px] font-light">+234 9061 3827 27</p>
                </div> */}
                <div className="flex items-center gap-3">
                <BiMailSend className='xl:text-2xl text-2xl'/>
                <a href="mailto:klemadomokai@gmail.com "> <p className="xl:text-[16px] 2xl:text-[18px] md:text-[14px] font-light cursor-pointer">klemadomokai@gmail.com 
</p></a>
                </div>

                <div className="flex items-center gap-3 font-light">
                <LiaLinkSolid className='xl:text-2xl text-2xl'/>
                <div className="flex items-center gap-1">
                <BiLogoFacebook className='text-xl cursor-pointer'/>
                <BiLogoInstagram className='text-xl cursor-pointer'/>
                <LiaTelegram className='text-xl cursor-pointer'/>
                </div>
                </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;