import React, { useEffect, useState } from "react";
import data from "../../fakeData";
const SearchResult = ({ location, vehicle, date }) => {
  const [vehicleImg, setVehicleImg] = useState("");

  useEffect(() => {
    const vehicleInfo = data.find((data) => data.vehicleType === vehicle);
    setVehicleImg(vehicleInfo.photo);
  }, [vehicle]);

  return (
    <div className="mb-4">
      <div className="container m-auto" style={{ maxWidth: "420px" }}>
        <div className="row g-2">
          <div className="col-12">
            <div className="p-3 border bg-info">
              <p>
                <i className="bi bi-calendar2-check-fill"></i>
                <b> Date : </b> {date.toString()}
              </p>
              <p>
                <i className="bi bi-geo-fill"></i> <b>From :</b>{" "}
                {location.pickForm}
              </p>
              <p>
                <i className="bi bi-geo-fill"></i> <b>To :</b>{" "}
                {location.destination}
              </p>
            </div>
          </div>
          <div className="col-12">
            <div className="p-3 border bg-light d-flex align-items-center justify-content-around">
              <img
                src={vehicleImg}
                alt=""
                className="w-25 img-fluid"
                srcSet=""
              />
              <p>{vehicle}</p>
              <p>
                <i className="bi bi-people-fill"></i> 4
              </p>
              <p>$67</p>
            </div>
          </div>
          <div className="col-12">
            <div className="p-3 border bg-light d-flex align-items-center justify-content-around">
              <img
                src={vehicleImg}
                alt=""
                className="w-25 img-fluid"
                srcSet=""
              />
              <p>{vehicle}</p>
              <p>
                <i className="bi bi-people-fill"></i> 4
              </p>
              <p>$67</p>
            </div>
          </div>
          <div className="col-12">
            <div className="p-3 border bg-light d-flex align-items-center justify-content-around">
              <img
                src={vehicleImg}
                alt=""
                className="w-25 img-fluid"
                srcSet=""
              />
              <p>{vehicle}</p>
              <p>
                <i className="bi bi-people-fill"></i> 4
              </p>
              <p>$67</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchResult;
