/* eslint-disable react/prop-types */

import { useState, useEffect } from "react";
import axios from "axios";


const WeatherData = ({ country }) => {
  // eslint-disable-next-line no-undef
  const api_key = process.env.REACT_APP_API_KEY
// variable api_key now has the value set in startup

  const [weather, setWeather] = useState({});

  useEffect(() => {
    if (country) {
      axios
        .get(`https://api.openweathermap.org/data/2.5/weather?lat=${country.lat}&lon=${country.long}&appid=${api_key}`)
        .then(response => {
          setWeather(response.data);
        })
        .catch(error => {
          console.error('Error fetching weather data:', error);
        });
    }
  }, [api_key, country]);

  return (
    <>
      <h2>Weather in {country.name}</h2>
      {weather.main && (
        <>
          <p>Temperature: {(weather.main.temp - 273.15).toFixed(2)} celcius</p>
        </>
      )}
      {weather.weather && weather.weather.length > 0 && (
        <img
          src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}.png`}
          alt=""
          width={100}
        />
      )}
      {weather.wind && (
        <p>Wind: {weather.wind.speed} m/s</p>
      )}
    </>
  );
};

export default WeatherData
