import React from "react";

const LocationInputForm = ({ handleLocationInput, handleSearchResult }) => {
  // console.log(handleLocationInput);
  return (
    <div>
      <div>
        <form onSubmit={handleSearchResult}>
          <fieldset>
            <legend> </legend>
            <div className="input-group input-group-sm mb-3">
              <span className="input-group-text" id="inputGroup-sizing-sm">
                Pick from
              </span>
              <input
                type="text"
                name="pickForm"
                className="form-control"
                aria-label="Sizing example input"
                aria-describedby="inputGroup-sizing-sm"
                onChange={handleLocationInput}
                required
              />
            </div>
            <div className="input-group input-group-sm mb-3">
              <span className="input-group-text" id="inputGroup-sizing-sm">
                Destination
              </span>
              <input
                type="text"
                name="destination"
                className="form-control"
                aria-label="Sizing example input"
                aria-describedby="inputGroup-sizing-sm"
                onChange={handleLocationInput}
                required
              />
            </div>
            <input type="submit" className="btn btn-info w-100" />
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default LocationInputForm;
