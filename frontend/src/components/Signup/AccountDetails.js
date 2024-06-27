import React, { useState } from "react";
import { useRidersContext } from "../../hooks/useRidersContext";
import formatDistanceToNow from "date-fns/formatDistanceToNow";
import { useAuthContext } from "../../hooks/useAuthContext";
import "./AccountDetails.css";
const AccountDetails = ({ rider }) => {
  const { dispatch } = useRidersContext();
  const { user } = useAuthContext();
  const [editMode, setEditMode] = useState(false);
  const [updatedRiderInfo, setUpdatedRiderInfo] = useState({
    firstName: rider.firstName,
    lastName: rider.lastName,
    ride: rider.ride,
    country: rider.country,
    rideType: rider.rideType,
    homeAddress: rider.homeAddress,
    dateofBirth: rider.dateofBirth,
    phoneNumber: rider.phoneNumber,
  });
  console.log(user.token);
  const handleClick = async () => {
    const response = await fetch("/api/riders/" + rider._id, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    });
    const json = await response.json();

    if (response.ok) {
      dispatch({ type: "DELETE_RIDER", payload: json });
    }
  };

  const handleUpdate = async () => {
    const response = await fetch("/api/riders/" + rider._id, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${user.token}`,
      },
      body: JSON.stringify(updatedRiderInfo),
    });
    const json = await response.json();

    if (response.ok) {
      dispatch({ type: "UPDATE_RIDER", payload: json });
      setEditMode(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUpdatedRiderInfo({
      ...updatedRiderInfo,
      [name]: value,
    });
  };

  return (
    <div className="card rider-details-admin">
      <div className="card-body">
        <h4
          className="card-title"
          style={{ fontSize: "30px", fontWeight: "bold", letterSpacing: "3px" }}
        >
          {rider.firstName}
        </h4>

        <p className="card-text">
          <strong>Last Name: </strong>
          {rider.lastName}
        </p>
        <p className="card-text">
          <strong>Ride: </strong>
          {rider.ride}
        </p>
        <p className="card-text">
          <strong>Country: </strong>
          {rider.country}
        </p>
        <p className="card-text">
          <strong>Ride Type:</strong>
          {rider.rideType}
        </p>
        <p className="card-text">
          <strong>Home Address: </strong>
          {rider.homeAddress}
        </p>
        <p className="card-text">
          <strong>Phone Number: </strong>
          {rider.phoneNumber}
        </p>
        <p className="card-text">
          <strong>Ride Date: </strong>
          {rider.dateofBirth}
        </p>
        <p className="card-text">
          {formatDistanceToNow(new Date(rider.createdAt), { addSuffix: true })}
        </p>

        <div className="button-container">
          <button
            className="btn edit-button"
            onClick={() => setEditMode(!editMode)}
          >
            {editMode ? "Cancel" : "Edit"}
          </button>

          {editMode ? (
            <div className="edit-mode">
              <label htmlFor="firstName">First Name: </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={updatedRiderInfo.firstName}
                onChange={handleInputChange}
              />
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={updatedRiderInfo.lastName}
                onChange={handleInputChange}
              />
              <input
                type="text"
                id="ride"
                name="ride"
                value={updatedRiderInfo.ride}
                onChange={handleInputChange}
              />
              <input
                type="text"
                id="country"
                name="country"
                value={updatedRiderInfo.country}
                onChange={handleInputChange}
              />
              <input
                type="text"
                id="rideType"
                name="rideType"
                value={updatedRiderInfo.rideType}
                onChange={handleInputChange}
              />

              <input
                type="text"
                id="homeAddress"
                name="homeAddress"
                value={updatedRiderInfo.homeAddress}
                onChange={handleInputChange}
              />
              <input
                type="date"
                id="dateofBirth"
                name="dateofBirth"
                value={updatedRiderInfo.dateofBirth}
                onChange={handleInputChange}
              />
              <input
                type="text"
                id="phoneNumber"
                name="phoneNumber"
                value={updatedRiderInfo.phoneNumber}
                onChange={handleInputChange}
              />

              <button
                className="btn update-button"
                onClick={handleUpdate}
                style={{ width: "100%" }}
              >
                Update
              </button>
            </div>
          ) : (
            <button className="btn delete-button" onClick={handleClick}>
              Delete
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default AccountDetails;
