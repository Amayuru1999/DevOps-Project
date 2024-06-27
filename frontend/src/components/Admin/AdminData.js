import React, { useEffect } from "react";
import { useRidersContext } from "../../hooks/useRidersContext";
import AccountDetails from "../Signup/AccountDetails";
// import Admin from "./Admin";
import "./AdminData.css";
import { useAuthContext } from "../../hooks/useAuthContext";

import GoogleMaps from "../GoogleMaps/GoogleMaps";

const AdminData = () => {
  const { riders, dispatch } = useRidersContext();
  const { user } = useAuthContext();

  useEffect(() => {
    const fetchRiders = async () => {
      try {
        const response = await fetch("/api/riders", {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        });
        const json = await response.json();

        if (response.ok) {
          dispatch({ type: "SET_RIDERS", payload: json });
        }
      } catch (error) {
        console.error("Error fetching riders:", error);
      }
    };
    if (user) {
      fetchRiders();
    }
  }, [dispatch, user]);

  return (
    <div className="admin-data-container">
      <div className="left-section">
        <div className="riders">
          {riders &&
            riders.map((rider) => {
              console.log("Rider Data:", rider);
              return <AccountDetails rider={rider} key={rider._id} />;
            })}
        </div>
      </div>
      <div className="right-section">
        <GoogleMaps />
      </div>
    </div>
  );
};

export default AdminData;
