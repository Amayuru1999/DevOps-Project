import React from "react";
import "./FourRides.css";
import blackRide from "../../assets/2.png";
import ERide from "../../assets/3.png";
import suvRide from "../../assets/4.png";
import tuktukRide from "../../assets/5.png";
import { Link } from "react-router-dom";

const FourRides = () => {
  return (
    <div>
      <Link to="/luxuryride" className="ride-link">
        <div className="cardFourRides">
          <img src={blackRide} alt="blackCar" className="cardImage" />
          Luxury Ride
        </div>
      </Link>
      <Link to="/eride" className="ride-link">
        <div className="cardFourRidesE">
          <img src={ERide} alt="ERide" className="cardImage" />E Ride
        </div>
      </Link>
      <Link to="/suvride" className="ride-link">
        <div className="cardFourRides">
          <img src={suvRide} alt="suvRide" className="cardImage" />
          SUV Ride
        </div>
      </Link>
      <Link to="/tuktukride" className="ride-link">
        <div className="cardFourRides">
          <img src={tuktukRide} alt="tuktukRide" className="cardImage" />
          Tuk Tuk Ride
        </div>
      </Link>
    </div>
  );
};

export default FourRides;
