import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import gsap from "gsap";
import NavBar from "./NavBar";
import Home from "./Home";
import CitiesData from "../data/citiesData";
import Brief from "./Brief";
import Slider from "./Slider";
import Map from "./Map";

const CityDetails = () => {
  const { cityName } = useParams();
  const [letters, setLetters] = useState([]);
  const [cityData, setCityData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [currentSection, setCurrentSection] = useState(null);

  const Section = () => {
    switch (currentSection) {
      case "home":
        return (
          <Home
            tagLine={cityData.tagline}
            description={cityData.description}
            image={cityData.images}
          />
        );
      case "Brief":
        return (
          <Brief
            brief={cityData.brief}
            introduction={cityData.introduction}
            image={cityData.images[1]}
            cityName={cityName}
            population={cityData.population}
            area={cityData.area}
            languages={cityData.languages}
            timezone={cityData.timezone}
            pointsOfInterest={cityData.pointsOfInterest}
            events={cityData.events}
            travelInfo={cityData.travelInfo}
          />
        );
        case "Gallery":
        return (
          <Slider
            images={cityData.images}
          />
        );
        case "Map":
        return (
          <Map cityName={cityName}/>
        );
      default:
        return (
          <Home
            tagLine={cityData.tagline}
            description={cityData.description}
            image={cityData.images}
          />
        );
    }
  };

  useEffect(() => {
    const letterArray = cityName.split("").map((letter, index) => ({
      letter,
      id: `letter-${index}`,
    }));
    setLetters(letterArray);
    setLoading(true);
    const city = CitiesData.find(
      (city) => city.name.toLowerCase() === cityName.toLowerCase()
    );
    setCityData(city);

    const tl = gsap.timeline();

    gsap.set(
      letterArray.map(({ id }) => `#${id}`),
      { opacity: 0, x: -100 }
    );

    tl.to(
      letterArray.map(({ id }) => `#${id}`),
      {
        opacity: 1,
        x: 0,
        duration: 0.5,
        stagger: 0.1,
      }
    );

    // Cleanup function to revert animation
    return () => {
      tl.kill();
    };
  }, [cityName, loading]);

  return (
    <div className='w-[100vw] h-[100vh] overflow-hidden  bg-[url("/bg.png")] '>

      <div className="w-full h-full flex z-10 relative">
        <div
          id="cityName"
          className="text-5xl w-[15vw] sm:w-[10vw] h-full text-white bg-Mred overflow-y-hidden  border-[#ffffffd0] border-r-4 sm:text-7xl flex flex-col items-center justify-center tracking-widest overflow-y-auto"
        >
          {letters.map(({ letter, id }) => (
            <span key={id} id={id} className="inline-block my-auto">
              {letter}
            </span>
          ))}
        </div>
        <div className="w-[90vw] h-full relative">
          <NavBar setCurrentSection={setCurrentSection} />
          
          {cityData ? <Section /> : <p>Loading...</p>}
        </div>
      </div>
      
    </div>
  );
};

export default CityDetails;
