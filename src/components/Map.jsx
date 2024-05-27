import React from "react";
import maps from "../data/maps";

const Map = ({ cityName }) => {
  const city = maps.find((map) => map.city === cityName);

  return (
    <div className="w-full h-[90%] flex justify-center items-center">
      {city ? (
        <div
        className="border border-4 mt-32 lg:mt-0 border-Mred h-[80%] w-[80%]"
          dangerouslySetInnerHTML={{ __html: city.embedMap }}
        ></div>
      ) : (
        <p>Map not found for {cityName}</p>
      )}
    </div>
  );
};

export default Map;
