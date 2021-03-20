import React, { useEffect, useState } from "react";
import "./home.css";
import data from "../../fakeData";
import ContentCard from "./ContentCard";

const Home = () => {
  const [transportVehicles, setTransportVehicle] = useState([]);
  useEffect(() => {
    setTransportVehicle(data);
  }, []);
  return (
    <div className="home-component mt-4 container ">
      <div className="mt-5 home-elements">
        <div className="row row-cols-1 row-cols-md-4 g-4 p-3">
          {transportVehicles.map((vehicle) => (
            <ContentCard vehicle={vehicle} key={vehicle.vehicleType} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
