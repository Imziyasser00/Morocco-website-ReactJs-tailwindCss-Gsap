import React, { useEffect } from "react";
import citiesList from "../data/moroccanCities";
import gsap from "gsap";
import { useNavigate } from "react-router-dom";

const Cities = () => {
  const navigateTo = useNavigate();
  
  useEffect(() => {
    animateCities();
  }, []);
  
  const animateCities = () => {
    const tl = gsap.timeline();
    tl.fromTo(
      ".city",
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 1,
        ease: "power1.inOut",
        stagger: 0.2,
      }
    );
    tl.to("#citiesBg", {
      backgroundColor: "#3B3B3B",
    });
  };

  const cityDetails = (item) => {
    const tl = gsap.timeline();
    tl.fromTo(
      ".city",
      {
        opacity: 1,
      },
      {
        opacity: 0,
        duration: 1,
        ease: "power1.inOut",
        stagger: 0.2,
      }
    );
    tl.to("#citiesBg", {
      backgroundColor: "#ffff",
      duration: 2,
      onComplete: () => navigateTo(`/city/${item}`)
    });
  };

  return (
    <div className="w-[100vw] h-[100vh] overflow-y-scroll md:overflow-y-hidden relative">
      <div
        className={`w-full absolute h-full top-0 left-0`}
      >
        <div
          className="w-full h-[100vh] grid grid-cols-3 grid-row-5 md:grid-cols-5 md:grid-rows-3"
          style={{ gridAutoCols: "1fr"}}
          id="citiesBg"
        > 
          {citiesList.map((item) => (
            <div
              className={`h-full bg-yellow object-cover group flex relative justify-center items-center text-lg md:text-3xl cursor-pointer tracking-widest transition-colors duration-300 text-white city`}
              key={item}
              onClick={() => {
                cityDetails(item);
                console.log(item.toLowerCase())
              }}
            >
              <img
                src={`/${item.toLowerCase()}.jpg`}
                alt={item}
                className="h-full w-full object-cover"
              />
              <div className="h-full w-full absolute top-0 left-0 bg-black opacity-85 group-hover:opacity-0 duration-300 transition-opacity"></div>
              <div className="absolute group-hover:opacity-0 transition-opacity duration-1500">
                {item}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cities;
