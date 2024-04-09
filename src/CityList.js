import React from 'react'

const CityList = ({cities, removeCity}) => {
  return (
    <ul>
  {cities.map((city) => (
    <li key={city} className="city-item">
      {city}{' '}
      <button className="red" onClick={() => removeCity(city)}>Remove</button>
    </li>
  ))}
</ul>

  )
}

export default CityList
