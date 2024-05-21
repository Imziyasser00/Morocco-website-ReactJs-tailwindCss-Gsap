import React, { useEffect, useState } from 'react'

const WeatherWidjet = () => {
    const [weatherData, setWeatherData] = useState(null)
    const [error, setError] = useState(null)
    useEffect(()=>{
        const options = { method: 'GET', headers: 
        { accept: 'application/json' } };
        fetch('https://api.tomorrow.io/v4/weather/forecast?location=new%20york&apikey=YOUR_APY_KEY', options)
      .then(response => response.json())
      .then(data => {
        // Set the weather data to state
        setWeatherData(data);
      })
      .catch(err => {
        // Set the error to state if there is an error
        setError(err);
        console.error(err);
      });
    },[])
  return (
    <div className='w-full h-full bg-red-500'>
    
    {weatherData && (
      <div>
        <h2>Weather Data:</h2>
        <pre>{JSON.stringify(weatherData, null, 2)}</pre>
      </div>
    )}
    {error && <p>Error fetching data: {error.message}</p>}
  
    </div>
  )
}

export default WeatherWidjet
