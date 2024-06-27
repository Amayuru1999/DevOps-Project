import React from "react";
import "./TukTukRide.css"; // Update the CSS file import
import video from "../../assets/TukTukRide.mp4"; // Update the video import

const TukTukRide = () => {
  return (
    <div className="tuk-tuk-ride">
      {" "}
      {/* Update the class name */}
      <h1>Tuk Tuk Ride: Experience Quirky and Fun Transportation</h1>
      <div className="videoDiv">
        <video src={video} autoPlay muted loop className="video"></video>
      </div>
      <p>
        Welcome to Tuk Tuk Ride, where we redefine transportation by offering a
        quirky and fun-filled Tuk Tuk experience. Our mission is to provide an
        exciting and unique travel adventure for our passengers.
      </p>
      <section className="features">
        <h2>Key Features of Our Tuk Tuks</h2>
        <ul>
          <li>
            <strong>Quirky Design:</strong> Our Tuk Tuks are designed to be fun,
            colorful, and unique, making your ride a memorable experience.
          </li>
          <li>
            <strong>City Exploration:</strong> Enjoy exploring the city streets
            in a Tuk Tuk, maneuvering through traffic and discovering hidden
            gems.
          </li>
          <li>
            <strong>Cultural Adventure:</strong> Immerse yourself in the local
            culture as you ride in a Tuk Tuk, a popular mode of transport in
            various countries.
          </li>
        </ul>
      </section>
      <section className="benefits">
        <h2>Benefits of Choosing Tuk Tuk Ride</h2>
        <ul>
          <li>
            <strong>Exciting Experience:</strong> Tuk Tuks offer an exciting and
            unconventional way to travel, adding a sense of adventure to your
            journey.
          </li>
          <li>
            <strong>Eco-Friendly:</strong> Tuk Tuks are often environmentally
            friendly and fuel-efficient, contributing to sustainable
            transportation options.
          </li>
          <li>
            <strong>Local Connection:</strong> Riding in a Tuk Tuk allows you to
            connect with the local community and experience their way of getting
            around.
          </li>
        </ul>
      </section>
      <p>
        Join us at Tuk Tuk Ride and embrace the excitement and joy of traveling
        in a Tuk Tuk. Hop on for a quirky adventure through the city streets.
      </p>
    </div>
  );
};

export default TukTukRide;
