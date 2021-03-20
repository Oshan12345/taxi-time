import React, { useState } from "react";
import LocationInputForm from "./LocationInputForm.js";
import SearchResult from "./SearchResult.js";
import { useParams } from "react-router";
import GoogleMaps from "./GoogleMap.js";

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
        <div
          className="google-map mx-4"
          style={{
            width: "-webkit-fill-available",
            height: "-webkit-fill-available",
          }}
        >
          <GoogleMaps />
        </div>
      </div>
    </div>
  );
};

export default DestinationSearch;
