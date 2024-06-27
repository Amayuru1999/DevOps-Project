import React from "react";
import "./LuxuryRide.css";
import video from "../../assets/LuxuryRide.mp4";

const LuxuryRide = () => {
  return (
    <div className="luxury-ride">
      <h1>Luxury Ride: Experience Unmatched Elegance and Comfort</h1>
      <div className="videoDiv">
        <video src={video} autoPlay muted loop className="video"></video>
      </div>
      <p>
        Welcome to Luxury Ride, where we redefine transportation by offering a
        seamless blend of sophistication, comfort, and unparalleled service. Our
        mission is to provide an exceptional travel experience that surpasses
        ordinary expectations.
      </p>

      <section className="customers">
        <h2>Who Are Our Valued Customers?</h2>
        <p>
          Our luxury transportation service is tailored to serve a diverse range
          of discerning customers, including:
        </p>
        <ol>
          <li>
            <strong>Business Travelers:</strong> For the busy executive on the
            move, we understand the importance of punctuality and comfort. Our
            luxury vehicles ensure you arrive at your destination in style,
            ready to conquer your business endeavors.
          </li>
          <li>
            <strong>Event Attendees:</strong> Attending a gala, red carpet
            event, or a special celebration? Make a grand entrance with our
            top-of-the-line luxury rides. Let us enhance your experience and
            leave a lasting impression.
          </li>
          <li>
            <strong>Tourists and Explorers:</strong> Exploring a new city? Our
            luxury ride service offers a blend of elegance and local expertise.
            Discover the city's attractions and hidden gems in utmost comfort
            and luxury.
          </li>
          <li>
            <strong>Special Occasions:</strong> Celebrate life's special moments
            with a touch of opulence. Whether it's a wedding, anniversary, or a
            romantic evening out, our luxury vehicles set the stage for
            unforgettable memories.
          </li>
          <li>
            <strong>Airport Transfers:</strong> Start or end your journey on a
            high note. Our airport transfer service ensures a smooth transition,
            allowing you to relax after a long flight or prepare for your
            travels in the lap of luxury.
          </li>
        </ol>
      </section>

      <section className="what-sets-us-apart">
        <h2>What Sets Us Apart?</h2>
        <ul>
          <li>
            <strong>Exquisite Fleet:</strong> Our range of luxury vehicles is
            meticulously selected to provide the epitome of elegance and
            comfort. From high-end sedans to spacious SUVs, we cater to every
            preference.
          </li>
          <li>
            <strong>Professional Chauffeurs:</strong> Our experienced chauffeurs
            are not just drivers; they are knowledgeable, courteous, and
            committed to delivering a premium service, ensuring a safe and
            enjoyable journey.
          </li>
          <li>
            <strong>Customized Experience:</strong> We understand that each
            customer is unique. Our service is flexible and can be tailored to
            your specific needs, ensuring a personalized luxury experience.
          </li>
        </ul>
      </section>

      <p>
        Join us at Luxury Ride and elevate your transportation experience to new
        heights. Sit back, relax, and indulge in luxury like never before.
      </p>
    </div>
  );
};

export default LuxuryRide;
