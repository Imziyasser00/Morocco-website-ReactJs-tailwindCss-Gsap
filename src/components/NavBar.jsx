import React, { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa";
import {
  FaHome,
  FaCity,
  FaMapMarkedAlt,
} from "react-icons/fa";
import { GrGallery } from "react-icons/gr";
import { RiCloseLargeFill } from "react-icons/ri";
import gsap from "gsap";
import { IoMdArrowDropleftCircle } from "react-icons/io";
import { useNavigate } from "react-router-dom";
const NavBar = ({ setCurrentSection }) => {
  const [activeSection, setActiveSection] = useState("Home");
  const [navDisplayed, setNavDisplayed] = useState(false)
  const navigate = useNavigate();

  const navbar = () => {
    setNavDisplayed(!navDisplayed);

  };
  useEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo(
      ".navLink",
      {
        opacity: 0,
        y: -100,
      },
      {
        opacity: 1,
        y: 0,
        stagger: 0.1,
        delay: 1,
      }
    );
    tl.fromTo("#arrow",{
        y: - 200,
    },{
      y :0,
      duration: 0.7,
      ease: "power3.inOut",
    })
  }, []);
 
  const handleSectionChange = (section) => {
    setNavDisplayed(!navDisplayed);
    setActiveSection(section);
    setCurrentSection(section);
  };

  const prevPage = () => {
    navigate("/cities");

  }

  return (
    <div className="">
      <div className="nav-bar h-full md : h-[10vh] w-full hidden md:block relative overflow-x-hidden">

        <ul className="w-full justify-center  md:flex items-center text-3xl text-white gap-9 mt-10">
          <li
            className={`navLink px-4 cursor-pointer py-4 rounded-full ${
              activeSection === "Home"
                ? "active"
                : "text-Mred border border-4 border-Mred"
            }`}
            onClick={() => handleSectionChange("Home")}
          >
            <FaHome />
          </li>
          <li
            className={`navLink px-4 cursor-pointer py-4 rounded-full ${
              activeSection === "Gallery"
                ? "active"
                : "text-Mred border border-4 border-Mred"
            }`}
            onClick={() => handleSectionChange("Gallery")}
          >
            <GrGallery />
          </li>
          <li
            className={`navLink px-4 cursor-pointer py-4 rounded-full ${
              activeSection === "Brief"
                ? "active"
                : "text-Mred border border-4 border-Mred"
            }`}
            onClick={() => handleSectionChange("Brief")}
          >
            <FaCity />
          </li>

          <li
            className={`navLink px-4 cursor-pointer py-4 rounded-full border border-4 border-Mred ${
              activeSection === "Map" ? "active" : "text-Mred "
            }`}
            onClick={() => handleSectionChange("Map")}
          >
            <FaMapMarkedAlt />
          </li>
        </ul>
      </div>
      
      {navDisplayed && <div className=" w-full h-full z-30 md:hidden bg-Mred absolute top-0 left-0"> 
       <ul className="w-full mt-10 h-full grid grid-cols-1 grid-rows-4 flex-col items-center relative">
      <li
        className={`text-white w-full text-4xl flex w-full gap-12 items-center ${
          activeSection === "Home" ? "active" : "text-white"
        }`}
        onClick={() => handleSectionChange("Home")}
      >
        <div className="w-1/3 flex justify-center items-center">
          <FaHome />
        </div>
        <div className="w-2/3   ml-10">Home</div>
      </li>
      <li
        className={`text-white w-full text-4xl flex gap-12  items-center ${
          activeSection === "Gallery" ? "active" : "text-white"
        }`}
        onClick={() => handleSectionChange("Gallery")}
      >
        <div className="w-1/3 flex justify-center items-center">
          <GrGallery />
        </div>
        <div className="w-2/3 ml-10">Gallery</div>
      </li>
      <li
        className={`text-white w-full  text-4xl flex gap-12 items-center${
          activeSection === "Brief" ? "active" : "text-white"
        }`}
        onClick={() => handleSectionChange("Brief")}
      >
        <div className="w-1/3 flex justify-center items-center">
          <FaCity />
        </div>
        <div className="w-2/3 ml-10">Brief</div>
      </li>

      <li
        className={`text-white w-full text-4xl flex  gap-12 items-center ${
          activeSection === "Brief" ? "active" : "text-white"
        }`}
        onClick={() => handleSectionChange("Map")}
      >
        <div className="w-1/3 flex justify-center items-center">
          <FaMapMarkedAlt />
        </div>
        <div className="w-2/3 ml-10">Map</div>
      </li>
    </ul> </div> 
      }

        <div className="w-16 h-16 rounded-lg md:hidden text-Mred flex justify-center items-center text-4xl z-50 bg-white absolute right-4 top-4" onClick={navbar}>
        {!navDisplayed ? <FaBars className="absolute"/>  :
        <RiCloseLargeFill className="absolute"/>}
        
      </div>
      <div className="w-16 h-16 rounded-lg  text-Mred flex justify-center items-center text-4xl z-50 bg-white cursor-pointer absolute left-4 top-4" onClick={prevPage} id="arrow">
        <IoMdArrowDropleftCircle className=""/>
        
      </div>
    </div>
  );
};

export default NavBar;
