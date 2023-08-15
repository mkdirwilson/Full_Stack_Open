/* eslint-disable react/prop-types */

import { useState, useEffect } from "react";
import axios from "axios";


const WeatherData = ({ country }) => {
  const apiKey = 'bce6702650df726224410128958734b7';

  const [weather, setWeather] = useState({});

  useEffect(() => {
    if (country) {
      axios
        .get(`https://api.openweathermap.org/data/2.5/weather?lat=${country.lat}&lon=${country.long}&appid=${apiKey}`)
        .then(response => {
          setWeather(response.data);
        })
        .catch(error => {
          console.error('Error fetching weather data:', error);
        });
    }
  }, [country]);

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
