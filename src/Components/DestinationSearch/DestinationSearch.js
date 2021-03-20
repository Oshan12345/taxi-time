import React, { useState } from "react";
import LocationInputForm from "./LocationInputForm.js";
import mapImg from "../../images/Map.png";
import SearchResult from "./SearchResult.js";
import { useParams } from "react-router";
const DestinationSearch = () => {
  let { vehicle } = useParams();
  const [isShowResult, setIsShowResult] = useState(false);

  const [location, setLocation] = useState({
    pickForm: "",
    destination: "",
  });

  const handleLocationInput = (e) => {
    const newLocation = { ...location };

    newLocation[e.target.name] = e.target.value;
    setLocation(newLocation);
  };

  const handleSearchResult = (e) => {
    e.preventDefault();
    if (location.pickForm && location.destination) {
      setIsShowResult(true);
    } else {
      setIsShowResult(false);
      console.log("please fill both fields");
    }
  };

  return (
    <div className="container">
      <hr />

      <div className="d-flex flex-column flex-md-row justify-content-between">
        {isShowResult ? (
          <SearchResult location={location} vehicle={vehicle} />
        ) : (
          <div className="">
            <LocationInputForm
              handleLocationInput={handleLocationInput}
              handleSearchResult={handleSearchResult}
            />
          </div>
        )}
        <div>
          <img src={mapImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default DestinationSearch;
