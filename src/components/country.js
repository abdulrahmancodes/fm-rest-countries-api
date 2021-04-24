import React from 'react';


const Country = ({country: {name, capital, region, population, languages, flag} }) => {   
    
    const formatLanguages = languages.length === 1 ? 'Language' : 'Languages'
    const languegesList = languages.map(lang => lang.name).join(', ')

    return (
        <>
            <div className="flag">
                <img src={flag} alt='' />
            </div>
            <h4>{name}</h4>
            <div className="country-details">
                <p><strong>Population:</strong> {population}</p>
                <p><strong>Region:</strong> {region}</p>
                <p><strong>Capital:</strong> {capital}</p>
                <p><strong>{formatLanguages}:</strong> {languegesList}</p>
            </div>
        </>  
    )
} 

export default Country;
