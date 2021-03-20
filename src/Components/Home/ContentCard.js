import React from "react";
import { Link } from "react-router-dom";

const ContentCard = ({ vehicle }) => {
  const { vehicleType, photo, description } = vehicle;
  return (
    <div>
      <Link
        to={`/search-destination/${vehicleType}`}
        className="text-decoration-none text-dark"
      >
        <div className="col">
          <div className="card h-100">
            <img
              src={photo}
              className="card-img-top imf-fluid m-auto w-75 p-4"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title text-center">{vehicleType}</h5>
              <p className="card-text">{description}</p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ContentCard;
