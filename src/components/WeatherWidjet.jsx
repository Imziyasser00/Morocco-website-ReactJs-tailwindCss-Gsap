import axios from "axios";
import gsap from "gsap";
import React, { useEffect, useState } from "react";

const WeatherWidget = ({ city }) => {
  const [data, setData] = useState({});
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=9ac1ac524a0fc90ce8c522af53f48437&units=metric`;
  useEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo(
      "#weather",
      {
        x: 400,
      },
      {
        x: 0,
        duration: 1,
        delay: 3,
      }
    );
    console.log(city);
    axios.get(url).then((response) => {
      setData(response.data);
      console.log(response.data);
      console.log(data.main.temp);
    });
  }, [city]);

  return (
    <div className="w-full bg-white rounded-2xl">
      {data.name ? (
        <div className="w-full flex flex-col md:flex-row">
          <div className=" w-full md:w-1/2 h-[200px] flex justify-center items-center">
            <img
              src={`/${data.weather[0].icon}.png`}
              className="object-cover w-[300px]"
              alt="icon"
            />
          </div>
          <div className="w-full md:w-1/2 flex">
            <div className="w-1/2 h-full flex  justify-center items-center ">
              <div className="text-8xl text-Mred">
                {Math.round(data.main.temp)}°
              </div>
            </div>
            <div className="w-1/2 pb-4 h-full flex gap-4 flex-col justify-center ">
              <div className="text-4xl md:text-3xl text-Mred">
                {data.weather[0].description}
              </div>
              <div className="text-4xl text-Mred">{data.name}</div>
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
