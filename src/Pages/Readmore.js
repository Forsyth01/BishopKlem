import React, { useEffect } from 'react';
import { HiOutlineArrowNarrowLeft } from "react-icons/hi"
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar';

const Readmore = () => {
    const navigate = useNavigate();

    const goBack = () => {
        navigate(-1); // This will navigate back in the browser's history
    };

    const location = useLocation();
    // Scroll to top on route change
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);

    return (
        <>
        <div className='flex min-h-fit flex-col'>
            <div className="grow">
                <div className="md:w-[70%] w-[80%] m-auto 2xl:text-xl 2xl:leading-relaxed xl:leading-relaxed md:leading-relaxed md:text-xl">
                    <p onClick={goBack}>
                        <HiOutlineArrowNarrowLeft className='my-10 text-xl' /></p>
                    <div className="space-y-4 pb-10">
                        <h1 className="font-bold">Campaign Introduction:</h1>
                        <p className="">Welcome to "Restoration 2024"! Our mission is to lead Edo State towards a brighter future, where prosperity and progress reign supreme. We are committed to restoring our beloved state to its full potential in the year 2024 and beyond.
                        </p>
                        <p className="">
                            Leading the "Restoration 2024" campaign is Bishop Dr. Adomokhai, a distinguished male leader with a deep connection to Edo State. Bishop Dr. Adomokhai brings a wealth of experience in [mention relevant experience, e.g., community leadership, public service, etc.]. His vision for Edo State includes [briefly outline the candidate's key policy priorities, e.g., improving healthcare access, fostering education, job creation, infrastructure development, etc.]. Bishop Dr. Adomokhai is not just a candidate; he is your dedicated advocate for a brighter Edo State.
                        </p>
                    </div>

                    <div className="py-10 space-y-4">
                        <h1 className="font-bold">**Meet the Candidate:**
                        </h1>
                        <div className="space-y-4">
                            <p className="">Our candidate, [Candidate Name], is a dedicated public servant with a proven track record of [mention candidate's relevant experience, e.g., community involvement, legislative accomplishments, leadership roles, etc.]. [He/She/They] shares your concerns and is ready to represent your voice in [mention the relevant political office, e.g., City Council, Congress, etc.].</p>
                            <p className="">With a deep understanding of the issues that matter most to you, [Candidate Name] is committed to [briefly outline the candidate's key policy priorities, e.g., improving education, protecting the environment, creating jobs, etc.]. [He/She/They] are not just a candidate; [he/she/they] are a dedicated advocate for our community.</p>
                        </div>
                    </div>


                    <div className="py-10 space-y-4">
                        <h1 className="font-bold">**Campaign Values**                  </h1>
                        <div className="space-y-4">
                            <p className="">"Restoration 2024" is guided by a set of core values that define our commitment to Edo State:
                            </p>
                            <ul className="list-disc ml-[30px] space-y-2">
                                <li className=""><span className='font-medium'>Transparency: </span>We are dedicated to open and honest communication with our constituents.</li>
                                <li className=""><span className='font-medium'>Accountability:</span>We take responsibility for our actions and decisions, ensuring they benefit the people of Edo State.</li>
                                <li className=""><span className='font-medium'>Unity: </span>We believe in fostering unity among our diverse communities for a stronger, more prosperous state.</li>
                            </ul>
                        </div>

                    </div>

                    <div className="py-10 space-y-4">
                        <h1 className="font-bold">**Our Vision**                  </h1>
                        <div className="space-y-4">
                            <p className="">Our vision for "Restoration 2024" is a rejuvenated Edo State characterized by:
                            </p>
                            <ul className="list-disc ml-[30px] space-y-2">
                                <li className="">Thriving local economies in urban and rural areas.</li>
                                <li className="">World-class healthcare accessible to all residents.</li>
                                <li className="">Quality education and skills development opportunities.</li>
                                <li className="">Infrastructure improvements that facilitate progress and connectivity.</li>
                            </ul>
                        </div>

                    </div>
                    <div className="space-y-4 py-10">
                        <h1 className="font-bold">**Thank You**                  </h1>
                        <p className="">With your support, we can turn this vision into a reality and restore Edo State to its rightful place as a beacon of progress and prosperity.

                        </p>
                        <p className="">Thank you for joining us on this journey of restoration. Together, under the leadership of Bishop Dr. Adomokhai, we will rebuild, rejuvenate, and create a future full of promise and opportunity for Edo State in 2024 and beyond. Your support is instrumental, and we are excited to work together to make a meaningful impact.</p>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};

export default Readmore;