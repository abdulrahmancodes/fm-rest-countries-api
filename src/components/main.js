import React from "react";
import Countries from "./countries";
import axios from "axios";
import Filter from "./filter";
import Loading from "./loading";
import { useGlobalContext } from "../App";


const Main = () => {
  const { countries } = useGlobalContext();
  let content;
  // const isLoaded = countries ? <div className="countries"> <Countries /> </div> : <Loading />;

  if (!countries) {
    content = <Loading/>

  } else if (countries.length === 0) {
    content = <h2 className='nothing-matched' >Sorry, but nothing matched your search criteria. Please try again with some different keywords.</h2> 
  } else {
    content = <div className="countries"> <Countries /> </div>;
  }

  return (
      <div className="main">
        <Filter />
        {content}
      </div>
  );
};


export default Main;
