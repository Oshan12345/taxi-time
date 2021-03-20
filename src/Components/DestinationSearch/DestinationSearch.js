import React, { useState } from "react";
import LocationInputForm from "./LocationInputForm.js";
import SearchResult from "./SearchResult.js";
import { useParams } from "react-router";
import GoogleMaps from "./GoogleMap.js";
import DatePick from "./DatePick.js";

const DestinationSearch = () => {
  let { vehicle } = useParams();
  const [isShowResult, setIsShowResult] = useState(false);

  const [location, setLocation] = useState({
    pickForm: "",
    destination: "",
  });

  const [date, setDate] = useState("");

  const handleLocationInput = (e) => {
    const newLocation = { ...location };

    newLocation[e.target.name] = e.target.value;
    setLocation(newLocation);
  };

  const handleSearchResult = (e) => {
    e.preventDefault();
    if (location.pickForm && location.destination && date) {
      setIsShowResult(true);
    } else {
      setIsShowResult(false);
    }
  };

  const handleTimeInput = (time) => {
    setDate(time);
  };

  return (
    <div className="container">
      <hr />

      <div className="d-flex flex-column flex-md-row justify-content-between">
        {isShowResult ? (
          <SearchResult location={location} vehicle={vehicle} date={date} />
        ) : (
          <div className="">
            <div className="mb-2">
              <p>Select date and time</p>
              <DatePick handleTimeInput={handleTimeInput} />
            </div>
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
