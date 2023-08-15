/* eslint-disable react/prop-types */


import axios from "axios"
import CountryData from "./components/CountryData";
import DisplayCountries from "./components/DisplayCountries";
import Filter from "./components/Filter";
import { useState, useEffect } from "react"





const App = () => {

  const [value, setValue] = useState('');
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState(null);




  useEffect(() => {
    if (countries) {
      axios
        .get('https://studies.cs.helsinki.fi/restcountries/api/all')
        .then(response => {
          console.log(response.data);
          const countries = response.data.map(country => ({
            name: country.name.common,
            id: country.cca2,
            area: country.area,
            languages: country.languages,
            capital: country.capital,
            flags: country.flags,
            lat: country.latlng[0],
            long: country.latlng[1]
          }));

          setCountries(countries);
        }
        )
        .catch(error=>{
          console.log(error)
        })
    }
  }, [countries]);




  if (countries.length === 0) {
    return null;
  }


  const countriesToShow = value.length > 0 ? countries.filter(country => {
    const pattern = new RegExp(value, 'i');
    return pattern.test(country.name);
  }) : [];



  const handleValueChange = (event) => {
    setValue(event.target.value);
    setSelectedCountry(null);
  };


  const handleShowButton = (id) => {
    const country = countries.find(country => country.id === id);
    setSelectedCountry(country);
  };


  return (
    <>
      <Filter value={value} handleValueChange={handleValueChange} />
      {selectedCountry ?

        (<CountryData country={selectedCountry} />) :

        <DisplayCountries countriesToShow={countriesToShow} handleShowButton={handleShowButton} />}
    </>
  );
}
export default App
