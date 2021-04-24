import React, {useRef} from 'react';
import { useGlobalContext } from '../App'
import axios from "axios";



const Filter = () => {
    const searchedText = useRef();
    const selectedRegion = useRef();

    const { setCountries, setSelectedRegion, countriesData } = useGlobalContext();

    const filterCountriesByName = () => {
        let regex = new RegExp(`${searchedText.current.value}`, "i");
        const filteredCountries = countriesData.filter(
          (country) =>
            regex.test(country.name) ||
            regex.test(country.languages.map((l) => l.name).join("")) ||
            regex.test(country.capital)
        );
        console.log(filteredCountries)
        setCountries(filteredCountries);
      };
    
      const filterCountriesByRegion = () => {
        setSelectedRegion(selectedRegion.current.value);
        searchedText.current.value= '';
      };


    const options = [
        'Select by region', 'Africa', 'Americas', 'Asia', 'Europe', 'Oceania'
      ];

    return (
    <div className="inputs">
        <div className="search">
            <img src="https://cdn.icon-icons.com/icons2/2551/PNG/512/search_icon_152764.png" className='search-icon' alt=""/>
            <input type="text" name="" id="" placeholder='Search for a country by name, city or language' ref={searchedText} onChange={filterCountriesByName} />
        </div>
        <select name="" onChange={filterCountriesByRegion} ref={selectedRegion} >
            <option value="" className='opt'>Filter by Region</option>
            <option value="africa">Africa</option>
            <option value="americas">Americas</option>
            <option value="asia">Asia</option>
            <option value="europe">Europe</option>
            <option value="oceania">Oceania</option>   
        </select>
    </div>
    )
}

export default Filter;