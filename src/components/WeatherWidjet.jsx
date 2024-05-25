import axios from "axios";
import gsap from "gsap";
import React, { useEffect, useState } from "react";

const WeatherWidget = ({city}) => {
  const [data, setData] = useState({});
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=9ac1ac524a0fc90ce8c522af53f48437&units=metric`;
  useEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo("#weather", {
      x: 400,
    },{
      x: 0,
      duration: 1,
      delay: 3
    })
    console.log(city)
    axios.get(url).then((response) => {
      setData(response.data);
      console.log(response.data);
      console.log(data.main.temp);
    });
  }, [city]);

  return (
    <div className="w-52 h-24  lg:w-96 lg:h-36 absolute bottom-5 right-5 border-2 bg-opacity-35 border border-Mred bg-white backdrop-filter backdrop-blur-lg rounded-lg  shadow-lg" id="weather">
      {data.name ? (
        <div className="w-full h-full flex  rounded-lg ">
          <div className="w-[50%] h-full">
            <div className="w-full h-full overflow-hidden">
              <img src={`/${data.weather[0].icon}.png`} className="object-cover w-full h-full -ml-8" alt="icon"/>
            </div>
          </div>
          
          <div className="w-2/6 h-full flex justify-center items-center  -ml-8 ">
            <div className="h-5/6 w-full my-auto ">
            <div className="flex w-full gap-8">
            <div className="text-5xl lg:text-7xl w-1/2 text-Mred">
            { data && Math.round(data.main.temp)}°
            </div>
            <div className="poppins font-bold uppercase text-md lg:text-2xl text-Mred">{data.weather[0].description}</div>
            </div>

             <div className="poppins font-bold uppercase text-md lg:text-2xl text-Mred">{data.name}</div>
            </div>
          </div>
          
        </div>
      ) : (
        <p className="text-white">Loading...</p>
      )}
    </div>
  );
};

export default WeatherWidget;
