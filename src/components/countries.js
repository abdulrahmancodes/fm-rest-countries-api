import React from "react";
import { useGlobalContext } from "../App";
import { Link } from "react-router-dom";
import Country from "./country";
import Loading from "./loading";

const Countries = () => {
  const { countries } = useGlobalContext();

  if (countries) {
    let countriesList = countries.map((country) => (
        <Link to={`/country/${country.name}`}>
          <div className="country" key={country.name}>
            {" "}
            <Country country={country} />{" "}
          </div>
        </Link>
      ));
      return countriesList;
  }
};

export default Countries;
