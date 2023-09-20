import React from 'react';
import { Link } from 'react-router-dom';

const Logo = () => {
    return (
        <div>
            <Link to="/" className=""> <img src="/Image/logo.png" alt="" className="xl:h-[30px] md:h-[32px] h-[30px] w-full m-auto 2xl:h-[40px] cursor-pointer" /></Link>
        </div>
    );
};

export default Logo;