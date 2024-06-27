import React from "react";
import "./SUVRide.css"; // Update the CSS file import
import video from "../../assets/SUVRide.mp4"; // Update the video import

const SUVRide = () => {
  return (
    <div className="suv-ride">
      {" "}
      {/* Update the class name */}
      <h1>SUV Ride: Spacious and Adventure-Ready Transportation</h1>
      <div className="videoDiv">
        <video src={video} autoPlay muted loop className="video"></video>
      </div>
      <p>
        Welcome to SUV Ride, where we redefine transportation by offering
        spacious and adventure-ready SUVs. Our mission is to provide a
        comfortable and versatile travel experience for every journey.
      </p>
      <section className="features">
        <h2>Key Features of Our SUVs</h2>
        <ul>
          <li>
            <strong>Ample Space:</strong> Our SUVs offer ample room for
            passengers and cargo, making them ideal for group travel and outdoor
            adventures.
          </li>
          <li>
            <strong>All-Terrain Capability:</strong> Experience smooth rides on
            various terrains, from city streets to rugged landscapes, thanks to
            our SUVs' all-wheel drive and robust capabilities.
          </li>
          <li>
            <strong>Comfort and Luxury:</strong> Enjoy a comfortable ride with
            high-quality interiors, advanced features, and modern amenities
            designed to enhance your journey.
          </li>
          <li>
            <strong>Safety First:</strong> Your safety is our priority. Our SUVs
            are equipped with advanced safety features to provide a secure and
            reliable travel experience.
          </li>
        </ul>
      </section>
      <section className="benefits">
        <h2>Benefits of Choosing SUV Ride</h2>
        <ul>
          <li>
            <strong>Versatile Travel:</strong> Whether it's a family outing, a
            road trip, or an adventure in nature, our SUVs adapt to your needs
            and preferences.
          </li>
          <li>
            <strong>Group Friendly:</strong> Traveling with a group? Our SUVs
            comfortably accommodate passengers and their belongings for a
            seamless group travel experience.
          </li>
          <li>
            <strong>Explore the Outdoors:</strong> Venture into the great
            outdoors with confidence. Our SUVs are equipped to handle outdoor
            activities and challenging terrains.
          </li>
        </ul>
      </section>
      <p>
        Join us at SUV Ride and embark on journeys with confidence, comfort, and
        the thrill of adventure. Discover the world in style and spaciousness.
      </p>
    </div>
  );
};

export default SUVRide;
