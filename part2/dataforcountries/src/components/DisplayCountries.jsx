/* eslint-disable react/prop-types */

import CountryData from "./CountryData";


const DisplayCountries = ({ countriesToShow, handleShowButton }) => {
  if (countriesToShow.length === 0) {
    return null;
  } else if (countriesToShow.length > 10) {
    return (
      <>
        <p>Too many countries, specify another filter</p>
      </>
    );
  } else if (countriesToShow.length === 1) {
    return (
      <>
        <CountryData country={countriesToShow[0]} />
      </>
    );
  } else {
    return (
      <>
        {countriesToShow.map(country => (
          <p key={country.id}>{country.name} <button type="submit" onClick={()=>handleShowButton(country.id)}>show</button></p>
        ))}
      </>
    );
  }
};

export default DisplayCountries