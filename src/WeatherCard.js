import axios from 'axios';
import React, { useEffect, useState } from 'react'

function WeatherCard({city}) {
    const [weatherData, setWeatherData]=useState(null);
    const [error,setError]=useState('')
    const apiURL=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=d9021bc414861e7ec7f141568a34d2f9`;
    useEffect(()=>{
        const fetchWeatherData = async () =>{
            try{
                const res=await axios.get(apiURL);
                setWeatherData(res.data);
                setError('')
            }
            catch(error){
                setError("Error while Fetching Weather data", error)
            }
        };
        fetchWeatherData();
        return () => setWeatherData(null);
    },[apiURL,city]);

  return (
    <div className='weather-card'>
        {weatherData ? (
            <>
            <h2>{weatherData.name}</h2>
            <p>Temperature : {weatherData.main.temp}°C</p>
            <p>Weather : {weatherData.weather[0].description}</p>
            <p>Feels Like: {weatherData.main.feels_like}°C</p>    
            <p>Humidity: {weatherData.main.humidity}%</p>
            <p>Pressure: {weatherData.main.pressure}</p>
            <p>Wind Speed: {weatherData.wind.speed}m/s</p>
            </>
            
        ) : (
            <p style={{color:'red'}}>{error}</p>
        )
    }
      
    </div>
  )
}

export default WeatherCard
