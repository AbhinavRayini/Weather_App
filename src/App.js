import { useState } from 'react';
import './App.css';
import Form from './Form';
import CityList from './CityList';
import WeatherCard from './WeatherCard';

function App() {
  const [cities, setCities]=useState([]);
  const addCity= (city) =>{
    setCities([...cities,city]);
  }
  const removeCity= (index) =>{
    const updateCities = [...cities];
    updateCities.splice(index,1);
    setCities(updateCities);
  }
  return (
    <div className='App'>
        <h1><b>Weather App</b></h1>
        <Form addCity={addCity}/>
        <CityList cities={cities} removeCity={removeCity} />
        <div className='weather-cards'>
          {cities.map((city,index)=>(
            <WeatherCard key={index} city={city}/>
          ))}
        </div>
    </div>
  );
}

export default App;
