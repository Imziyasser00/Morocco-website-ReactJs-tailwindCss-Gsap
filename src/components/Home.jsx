import React, { useEffect } from "react";
import gsap from "gsap";

const Home = ({ tagLine, description, image }) => {
  useEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo(
      ".tagLine",
      {
        y: 90,
        skewY: 10,
        opacity: 0,
      },
      {
        y: 0,
        skewY: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.inOut",
        stagger: 0.2,
        delay:1
      }
    ).fromTo("#img",{
        yPercent:-100
    },{
        duration: 2, 
        yPercent:0,
    })
  }, []);
  return (
    <div className="w-full h-[80%] mt-24 lg:mt-0 flex flex-col-reverse lg:flex-row">
      <div className="w-full lg:w-1/2 h-full flex justify-center mt-2 lg:mt-24 overflow-hidden ">
        <img
          src={`/${image[0]}`}
          id="img"
          alt="photo"
          className="w-4/5 h-4/6 object-cover rounded-lg"
        />
      </div>
      <div className="w-full lg:w-1/2 h-full md:h-[70%] lg:h-full gap-10 flex justify-center items-center flex-col relative">
        <h2 className="text-6xl lg:text-9xl font-medium  lg:-mt-32 tagLine text-center">
          {tagLine}
        </h2>
        <h2 className="text-2xl w-2/3 text-center tagLine">{description}</h2>
      </div>
    </div>
  );
};

export default Home;
