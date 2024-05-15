import React, { useEffect } from 'react'

const CityDetails = ({ city, tl }) => {
   

    useEffect(() => {
      tl.to("#cityDet", {
        opacity: 1,
        duration: 2,
        ease: "power3.inOut",
      }).to("#bg", {
        width: "100vw",
        duration: 2,
        overflow: "visible",
      }).to("#window",{
        overflow: "visible",
      })

    }, [city]);

  

    return (
      <div className="w-full h-full" id="cityDet">
      <div className="flex w-full flex-no-wrap p-4">
       
          <div key={city} className="w-[100vw] h-64 bg-gray-300">
            {city}
          </div>
        
      </div>
    </div>
    );
  };

export default CityDetails

