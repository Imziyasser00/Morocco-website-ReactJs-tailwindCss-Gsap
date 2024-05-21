import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import gsap from 'gsap';
import NavBar from './NavBar';
import Home from './Home';
import CitiesData from '../data/citiesData';
import WeatherWidjet from './WeatherWidjet';
import Brief from './Brief';

const CityDetails = () => {
  const { cityName } = useParams();
  const [letters, setLetters] = useState([]);
  const [cityData, setCityData] = useState(null);
  const [loading, setLoading] = useState(false)
  const [currentSection, setCurrentSection] = useState(null)

  const Section = () => {
    switch (currentSection) {
      case 'home':
        return <Home tagLine={cityData.tagline} description={cityData.description} image={cityData.images}/>
      case 'Brief':
        return <Brief brief={cityData.brief} introduction={cityData.introduction} image={cityData.images[1]}/>;
      default:
        return <Home tagLine={cityData.tagline} description={cityData.description} image={cityData.images}/>
    }
  };

  useEffect(() => {
    const letterArray = cityName.split('').map((letter, index) => ({
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
  }, [cityName,loading]);

  return (
    <div className='w-[100vw] h-[100vh] overflow-hidden relative bg-[url("/bg.png")]'>
      <div className='w-full h-full flex z-10'>
        <div
          id='cityName'
          className='text-5xl w-[15vw] sm:w-[10vw] h-full border-r-8 text-white bg-Mred overflow-y-hidden  border-Mred sm:text-7xl flex flex-col items-center justify-center tracking-widest overflow-y-auto'
        >
          {letters.map(({ letter, id }) => (
            <span key={id} id={id} className='inline-block my-auto'>
              {letter}
            </span>
          ))}
        </div>
        <div className='w-[90vw] h-full'>
          <NavBar setCurrentSection={setCurrentSection}/>
          {cityData ? (
          <Section />
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </div>
      <div className='absolute r-0 b-0 w-12 h-12'>
          <WeatherWidjet />
      </div>
    </div>
  );
};

export default CityDetails;
