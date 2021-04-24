import React, { useEffect, useState, useContext } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import axios from "axios";
import "./styles/App.css";
import "./styles/responsive.css";
import "./styles/base.css";
import Header from "./components/header";
import Main from "./components/main";
import Description from "./components/country-desc";

const AppContext = React.createContext();


function App() {
  const [dark, setDarkMode] = useState(false);
  const [countries, setCountries] = useState(null);
  const [countriesData, setData] = useState([]);
  const [selectedRegion, setSelectedRegion] = useState('');



  useEffect(() => {
    fetchData();
  }, [selectedRegion]);


  const fetchData = async () => {
  const url = selectedRegion !== '' ? `https://restcountries.eu/rest/v2/region/${selectedRegion}` : "https://restcountries.eu/rest/v2/all";
    const response = await axios.get(url);
    const data = await response.data;
    setData(data)
    setCountries(data);
  };



  const toggleMode = () => {
    document.body.classList.toggle("dark");
    dark === true ? setDarkMode(false) : setDarkMode(true);
  };

  return (
    <AppContext.Provider value={ {countries, setCountries, setSelectedRegion, countriesData} }>
      <Router>
        <div className="container">
          <Header mode={dark === false ? "Dark" : "Light"} onClick={toggleMode} />
          <Switch>
            <Route
            path="/country/:name"
            children={<Description countries={countries} />}
            ></Route>
            <Route exact strict path="/">
              <Main />
            </Route>
          </Switch>
        </div>
      </Router>
    </AppContext.Provider>
  );
}

export const useGlobalContext = () => {
  return useContext(AppContext);
};


export default App;
