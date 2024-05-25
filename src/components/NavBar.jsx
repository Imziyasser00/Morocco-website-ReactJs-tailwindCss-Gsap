import React, { useEffect, useState } from 'react';
import { FaHome, FaCity, FaInfoCircle, FaStar, FaPlane, FaMapMarkedAlt } from "react-icons/fa";
import { GrGallery } from "react-icons/gr";
import { LuPartyPopper } from "react-icons/lu";
import { IoSunny } from "react-icons/io5";
import gsap from "gsap";

const NavBar = ({ setCurrentSection }) => {
  const [activeSection, setActiveSection] = useState('Home');

  useEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo(".navLink", {
      opacity: 0,
      y: -100,
    }, {
      opacity: 1,
      y: 0,
      stagger: 0.1,
      delay: 1,
    });
  }, []);

  const handleSectionChange = (section) => {
    setActiveSection(section);
    setCurrentSection(section);
  };

  return (
    <div className="nav-bar w-full mt-20">
      <ul className='w-full justify-center hidden lg:flex items-center text-3xl text-white gap-9'>
        <li
          className={`navLink px-4 cursor-pointer py-4 rounded-full ${activeSection === 'Home' ? 'active' : 'text-Mred border border-4 border-Mred'}`}
          onClick={() => handleSectionChange('Home')}
        >
          <FaHome />
        </li>
        <li
          className={`navLink px-4 cursor-pointer py-4 rounded-full ${activeSection === 'Gallery' ? 'active' : 'text-Mred border border-4 border-Mred'}`}
          onClick={() => handleSectionChange('Gallery')}
        >
          <GrGallery />
        </li>
        <li
          className={`navLink px-4 cursor-pointer py-4 rounded-full ${activeSection === 'Brief' ? 'active' : 'text-Mred border border-4 border-Mred'}`}
          onClick={() => handleSectionChange('Brief')}
        >
          <FaCity />
        </li>
        <li
          className={`navLink px-4 cursor-pointer py-4 rounded-full ${activeSection === 'KeyInfo' ? 'active' : 'text-Mred border border-4 border-Mred'}`}
          onClick={() => handleSectionChange('KeyInfo')}
        >
          <FaInfoCircle />
        </li>
        <li
          className={`navLink px-4 cursor-pointer py-4 rounded-full ${activeSection === 'Points' ? 'active' : 'text-Mred border border-4 border-Mred'}`}
          onClick={() => handleSectionChange('Points')}
        >
          <FaStar />
        </li>
        <li
          className={`navLink px-4 cursor-pointer py-4 rounded-full ${activeSection === 'Events' ? 'active' : 'text-Mred border border-4 border-Mred'}`}
          onClick={() => handleSectionChange('Events')}
        >
          <LuPartyPopper />
        </li>
        <li
          className={`navLink px-4 cursor-pointer py-4 rounded-full ${activeSection === 'Travel' ? 'active' : 'text-Mred border border-4 border-Mred'}`}
          onClick={() => handleSectionChange('Travel')}
        >
          <FaPlane />
        </li>

        <li
          className={`navLink px-4 cursor-pointer py-4 rounded-full border border-4 border-Mred ${activeSection === 'Map' ? 'active' : 'text-Mred '}`}
          onClick={() => handleSectionChange('Map')}
        >
          <FaMapMarkedAlt />
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
