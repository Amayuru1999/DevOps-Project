import React from "react";
import { useState } from "react";
import { useRidersContext } from "../../hooks/useRidersContext";
import { useAuthContext } from "../../hooks/useAuthContext";
import QRCode from "qrcode.react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import qrcode from "qrcode";

const RiderCreate = () => {
  const { dispatch } = useRidersContext();
  const { user } = useAuthContext();
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [ride, setride] = useState("");
  const [country, setcountry] = useState("");
  const [rideType, setrideType] = useState("");
  const [homeAddress, sethomeAddress] = useState("");
  const [dateofBirth, setdateofBirth] = useState("");
  const [phoneNumber, setphoneNumber] = useState("");
  const [error, seterror] = useState(null);
  const [emptyFields, setEmptyFields] = useState([]);
  const [successMessage, setSuccessMessage] = useState(null);
  const handleDownloadQRCode = () => {
    const qrCodeData = `${firstName} ${lastName}\nRide: ${ride}\nTime: ${new Date().toLocaleString()}`;

    // Generate the QR code image as a base64 data URL
    qrcode.toDataURL(
      qrCodeData,
      { errorCorrectionLevel: "L" },
      function (err, url) {
        if (err) throw err;

        // Create a PDF
        const pdf = new jsPDF();

        // Add the QR code image to the PDF
        pdf.addImage(url, "PNG", 15, 40, 180, 180);

        // Save the PDF as a file
        pdf.save("qr_code.pdf");
      }
    );
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!user) {
      seterror("You must be logged in");
      return;
    }

    const rider = {
      firstName,
      lastName,
      ride,
      country,
      rideType,
      homeAddress,
      dateofBirth,
      phoneNumber,
    };
    const response = await fetch("/api/riders", {
      method: "POST",
      body: JSON.stringify(rider),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${user.token}`,
      },
    });
    const json = await response.json();

    if (!response.ok) {
      seterror(json.error);
      setEmptyFields(json.emptyFields);
    }
    if (response.ok) {
      seterror(null);
      setEmptyFields([]);
      setfirstName("");
      setlastName("");
      setride("");
      setcountry("");
      setrideType("");
      sethomeAddress("");
      setdateofBirth("");
      setphoneNumber("");
      console.log("new rider added", json);
      setSuccessMessage("Rider created successfully!");
      // Clear success message after a few seconds (e.g., 5 seconds)
      setTimeout(() => {
        setSuccessMessage(null);
      }, 5000);
    }
  };
  return (
    <form className="create" onSubmit={handleSubmit}>
      <div style={{ position: "relative" }}>
        <img
          src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_956,h_537/v1636501380/assets/7c/0d98ca-0968-4985-9eae-693ec18fde03/original/UberX-Share-Icon.png" // Replace with the actual path to your image
          alt="Uber Logo"
          style={{
            position: "absolute",
            top: 100,
            right: -100,
            width: "500px",
            height: "500px",
          }} // Adjust the width and height accordingly
        />
      </div>
      <h1
        style={{ fontFamily: "Poppins", fontWeight: "bold", fontSize: "2em" }}
      >
        Create Ride
      </h1>

      <label style={{ fontFamily: "Poppins" }}>First Name</label>
      <input
        type="text"
        onChange={(e) => setfirstName(e.target.value)}
        value={firstName}
        // className={emptyFields.includes("firstName") ? "error" : ""}
      />

      <label style={{ fontFamily: "Poppins" }}>Last Name</label>
      <input
        type="text"
        onChange={(e) => setlastName(e.target.value)}
        value={lastName}
        // className={emptyFields.includes("lastName") ? "error" : ""}
      />

      <label style={{ fontFamily: "Poppins" }}>Ride</label>
      <input
        type="text"
        onChange={(e) => setride(e.target.value)}
        value={ride}
        // className={emptyFields.includes("ride") ? "error" : ""}
      />
      <label style={{ fontFamily: "Poppins" }}>Ride Type</label>
      <input
        type="text"
        onChange={(e) => setrideType(e.target.value)}
        value={rideType}
        // className={emptyFields.includes("rideType") ? "error" : ""}
      />
      <label style={{ fontFamily: "Poppins" }}>Country</label>
      <input
        type="text"
        onChange={(e) => setcountry(e.target.value)}
        value={country}
        // className={emptyFields.includes("country") ? "error" : ""}
      />
      <label style={{ fontFamily: "Poppins" }}>Home Address</label>
      <input
        type="text"
        onChange={(e) => sethomeAddress(e.target.value)}
        value={homeAddress}
        // className={emptyFields.includes("homeAddress") ? "error" : ""}
      />
      <label style={{ fontFamily: "Poppins" }}>Ride Date</label>
      <input
        type="date"
        onChange={(e) => setdateofBirth(e.target.value)}
        value={dateofBirth}
        // className={emptyFields.includes("dateofBirth") ? "error" : ""}
      />
      <label style={{ fontFamily: "Poppins" }}>Phone Number</label>
      <input
        type="text"
        onChange={(e) => setphoneNumber(e.target.value)}
        value={phoneNumber}
        // className={emptyFields.includes("phoneNumber") ? "error" : ""}
      />

      <button style={{ fontFamily: "Poppins" }} onClick={handleDownloadQRCode}>
        Create
      </button>
      {error && <div className="error">{error}</div>}
      {successMessage && <div className="success">{successMessage}</div>}
    </form>
  );
};

export default RiderCreate;
