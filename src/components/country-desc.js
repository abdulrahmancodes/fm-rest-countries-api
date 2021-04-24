import React, {useState, useEffect} from 'react';
import axios from 'axios';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import { Link, useParams } from 'react-router-dom';
import { BorderLeft } from '@material-ui/icons';
import Loading from './loading';

const Borders = (props) => {
    let buttonStyle = props.borders.join("").length > 40 ? {marginBottom: '10px'} : {};
    let borderList = props.borders.map( (border, i) => <Link to={`/country/${border}`} > <li key={i} className='border' style={buttonStyle}>{border}</li> </Link> )
    return borderList;
}

const Description = () => {
    const clickedName = useParams().name;   
    const [countries, setCountries] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);   
        fetchCountry();
    }, [])
    
    const fetchCountry = async () => {
        const url = "https://restcountries.eu/rest/v2/all"
        const response = await axios.get(url);
        const data = await response.data;
        setCountries(data);
        setLoading(false)
    }

    if(loading) {
        return <Loading />
    }

    if (!countries) {
        return <h2>Nothing...</h2>
    } else {
       let { name, topLevelDomain, capital, borders, region, subregion, population, languages, flag, nativeName, currencies } = countries.filter(e => e.name === clickedName)[0];
       let formatTLD = topLevelDomain[0];
       let formatLanguages = languages.length === 1 ? 'Language' : 'Languages'
       let languegesList = languages.map(lang => lang.name).join(', ')
       let formatCurrency = currencies.map( curr => curr.name)
       let formatBorders = countries.filter( elem => borders.includes(elem.alpha3Code) ).map(e => e.name);
        
    return (
        <div className="desc-wrapper">
            <Link to='/' className="back-btn">
                <KeyboardBackspaceIcon />
                <p>Back</p>
            </Link>
            <div className="desc">
                <img src={flag} alt=""/>
                <div className="country-desc">
                    <h4>{name}</h4>
                    <ul className='details'>
                        <li><strong>Native Name:</strong> {nativeName}</li>
                        <li><strong>Population:</strong> {population}</li>
                        <li><strong>Region:</strong> {region}</li>
                        <li><strong>Sub Region:</strong> {subregion}</li>
                        <li><strong>Capital:</strong> {capital}</li>
                        <li><strong>Top Level Domain:</strong> {formatTLD}</li>
                        <li><strong>Currencies</strong> {formatCurrency}</li>
                        <li><strong>{formatLanguages}:</strong> {languegesList}</li>
                    </ul>
                    <div className="border-countries-container">
                        <strong>Border Countries:</strong>
                        <ul className="border-countries">
                            <Borders borders={formatBorders} />
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
    }
}

export default Description;