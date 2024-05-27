import React, { useEffect } from "react";
import gsap from "gsap";
import WeatherWidget from "./WeatherWidjet";
import Accordion from "./Accordion";

const Brief = ({
  brief,
  introduction,
  image,
  cityName,
  population,
  area,
  languages,
  timezone,
  pointsOfInterest,
  events,
  travelInfo,
}) => {
  useEffect(() => {
    console.log(languages);
    const tl = gsap.timeline();
    console.log(image);
    tl.fromTo(
      "#intro",
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
    tl.fromTo(
      "#weather",
      {
        y: -30,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
      }
    );
    tl.fromTo(
      "#infos",
      {
        y: -30,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
      }
    );
    tl.fromTo("#accordion",{
      y: -30,
      opacity: 0,
    },{
      y : 0,
      opacity:1,
      duration: 1,
    })
  }, []);

  return (
    <div className="w-full h-[95vh] md:h-[80vh] mt-16 lg:h-[90vh] flex flex-col lg:flex-row lg:justify-center overflow-y-scroll lg:overflow-y-hidden overflow-x-hidden mb-28">
      <div className="w-full lg:w-1/2 h-full lg:h-[90%] flex flex-col items-center gap-8 mt-10 ">
        <div className="w-[95%] bg-white rounded-xl border border-4 border-Mred" id="intro">
          <div className="text-xl md:text-2xl   xl:text-3xl p-5">{brief}</div>
          <div className="text-xl  md:text-2xl  xl:text-3xl  p-5">{introduction}</div>
        </div>
        <div className="w-[95%]  bg-white rounded-xl border border-4 border-Mred" id="weather">
          <WeatherWidget city={cityName.toLowerCase()} />
        </div>
      </div>
      <div className="w-full h-full lg:w-1/2 flex flex-col items-center my-10 gap-8 mb-24p">
        <div className="w-[95%] bg-white rounded-xl text-2xl border border-4 border-Mred" id="infos">
          <div className="w-full h-1/2 flex">
            <div className="w-1/2 h-full flex items-center justify-between p-6">
              <div>Population : </div>
              <div className="text-Mred">{population}</div>
            </div>
            <div className="w-1/2 h-full flex items-center justify-between p-6">
              <div>Area : </div>
              <div className="text-Mred">{area}</div>
            </div>
          </div>
          <div className="w-full h-1/2 flex">
            <div className="w-1/2 h-full flex items-center justify-between p-6">
              <div>Languages: </div>
              <div className="flex justify-around items-center gap-4 text-Mred">
                {languages.map((item, index) => (
                  <div key={index}>{item}</div>
                ))}
              </div>
            </div>
            <div className="w-1/2 h-full flex items-center justify-between p-6">
              <div>Timezone : </div>
              <div className="text-Mred">{timezone}</div>
            </div>
          </div>
        </div>
        <div className="w-[95%] " id="accordion">
                <Accordion pointsOfInterest={pointsOfInterest} events={events} travelInfo={travelInfo} cityName={cityName}/>
        </div>
      </div>
      
    </div>
  );
};

export default Brief;
