import React from "react";
import "./ERide.css"; // Update the CSS file import
import video from "../../assets/ERide.mp4"; // Update the video import

const ERide = () => {
  return (
    <div className="e-ride">
      {" "}
      {/* Update the class name */}
      <h1>E Ride: Electric and Eco-Friendly Transportation</h1>
      <div className="videoDiv">
        <video src={video} autoPlay muted loop className="video"></video>
      </div>
      <p>
        Welcome to E Ride, where we redefine transportation with our electric
        and eco-friendly vehicles. Our mission is to provide a sustainable and
        efficient travel experience while reducing our environmental impact.
      </p>
      <section className="customers">
        <h2>Who Can Benefit from E Rides?</h2>
        <p>
          Our electric ride service is designed to serve a variety of
          eco-conscious customers, including:Riding
        </p>
        <ol>
          <li>
            <strong>Environmentally Conscious Commuters:</strong> Reduce your
            carbon footprint by commuting in our electric vehicles. Enjoy a
            comfortable and eco-friendly ride to your destination.
          </li>
          <li>
            <strong>City Explorers:</strong> Explore urban areas in a
            sustainable and efficient way. Our electric rides are perfect for
            navigating cities and experiencing local attractions while
            contributing to a cleaner environment.
          </li>
          <li>
            <strong>Travel Enthusiasts:</strong> Travel responsibly and
            sustainably with our electric ride service. Whether you're exploring
            scenic routes or going on an adventure, our eco-friendly vehicles
            provide a guilt-free travel experience.
          </li>
          <li>
            <strong>Short-distance Travelers:</strong> For short trips and
            errands, our electric vehicles offer a convenient and
            environmentally friendly solution. Say goodbye to traditional
            gas-powered transportation for your everyday needs.
          </li>
        </ol>
      </section>
      <section className="what-sets-us-apart">
        <h2>What Makes E Ride Unique?</h2>
        <ul>
          <li>
            <strong>Zero Emissions:</strong> Our electric vehicles produce zero
            emissions, contributing to cleaner air and a healthier planet.
            Choose sustainability without compromising on comfort and
            convenience.
          </li>
          <li>
            <strong>Charging Infrastructure:</strong> We have a robust charging
            network to ensure our electric vehicles are always ready to go. Rest
            assured that you'll have a hassle-free experience with our reliable
            charging solutions.
          </li>
          <li>
            <strong>Cost-effective and Efficient:</strong> E Ride offers a
            cost-effective way to travel while minimizing your impact on the
            environment. Enjoy the benefits of electric transportation without
            breaking the bank.
          </li>
        </ul>
      </section>
      <p>
        Join us at E Ride and be a part of the sustainable transportation
        revolution. Embrace electric travel for a greener future.
      </p>
    </div>
  );
};

export default ERide;
