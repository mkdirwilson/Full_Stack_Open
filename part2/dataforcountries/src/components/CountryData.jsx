/* eslint-disable react/prop-types */

import WeatherData from "./WeatherData";



const CountryData = ({ country }) => {
  return (
    <>
      <h1>{country.name}</h1>
      {country.capital.map(city => (
        <p key={city}>capital {city}</p>
      ))}
      <p>area {country.area}</p>
      <h3>languages</h3>
      <ul>
        {Object.values(country.languages).map((language, index) => (
          <li key={index}>{language}</li>
        ))}
      </ul>
      <img src={country.flags.png} alt={`${country.name} flag`} />
      <WeatherData country={country}/>
    </>
  );
};

export default CountryData