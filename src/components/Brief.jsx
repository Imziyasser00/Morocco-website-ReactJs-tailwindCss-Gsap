import React, { useEffect } from "react";
import gsap from "gsap";

const Brief = ({ brief, introduction, image }) => {
  useEffect(() => {
    const tl = gsap.timeline();
    console.log(image);
    tl.fromTo(
      "#introduction",
      {
        y: -100,
        opacity: 0,
      },
      {
        y: 0,
        skewY: 0,
        opacity: 1,
        duration: 1,
      }
    );
    tl.fromTo("#brief",{
        y :-100,
        opacity: 0,
    },{
        y:0,
        opacity: 1,
        duration: 1,
    })
    tl.fromTo("#image",{
        yPercent: -100,
    },{
        yPercent : 0,
        duration : 2,
    })
  }, []);

  return (
    <div className="w-full h-full flex flex-col ">
      <div
        className="w-4/5 mx-auto text-center text-xl mt-0"
        id="introduction"
      >
        {introduction}
      </div>
      <div className="w-full h-full flex flex-col justify-center items-center">
        <div className="w-5/6 h-full flex justify-center py-8 items-center">
          <div className="w-full  h-4/6 justify-center items-center flex text-center text-xl" id="brief">
            {brief}
          </div>
        </div>
        <div className="w-full flex h-full justify-center items-center ">
        <div className="w-full md:w-1/2 h-full flex justify-center mt-2 md:mt-24 overflow-hidden ">
        <img
          src={`/${image}`}
          id="image"
          alt="photo"
          className="w-4/5 ml-8  mt-0 object-cover rounded-lg"
        />
      </div>
        </div>
      </div>
    </div>
  );
};

export default Brief;
