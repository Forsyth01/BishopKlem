import gsap from 'gsap';
import React, { createContext, useState, useEffect } from 'react';

export const SideNavToggle = createContext();

const SideNavToggleProvider = (props) => {
   
    const [isOpen, setIsOpen] = useState(false);

 const toggleSideNav = () => {
        setIsOpen(!isOpen);
        gsap.to('.sidenav', { x: isOpen ? '-100%' : '0%', duration: 0.3 });
    };

    return (
        <SideNavToggle.Provider value={{ isOpen, setIsOpen, toggleSideNav, gsap}}>
            {props.children}
        </SideNavToggle.Provider> 
    );
};

export default SideNavToggleProvider;