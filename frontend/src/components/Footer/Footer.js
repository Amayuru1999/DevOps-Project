import React from "react";
import { MDBFooter, MDBContainer } from "mdb-react-ui-kit";

export default function Footer() {
  const footerStyle = {
    height: "200px", // Adjust the height as needed
    backgroundColor: "black",
    padding: "20px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  };

  const headingStyle = {
    marginRight: "20px", // Adjust the margin to create spacing between headings
    color: "white",
    whiteSpace: "nowrap", // Prevent line breaks
    display: "inline", // Display in one line
    fontSize: "23px", // Adjust the font size as needed
  };

  const paragraphStyle = {
    fontSize: "15px", // Adjust the font size for paragraphs
    color: "white", // Set the color to white
  };

  const copyrightStyle = {
    ...paragraphStyle,
    textAlign: "center", // Center the text
  };

  return (
    <MDBFooter style={footerStyle}>
      <MDBContainer>
        <div style={{ backgroundColor: "black", color: "white" }}></div>
        <div className="footer-links">
          <h4 style={headingStyle}>About Us</h4>
          <h4 style={headingStyle}>Ride Easy</h4>
          <h4 style={headingStyle}>Support</h4>
          <h4 style={headingStyle}>Contact Us</h4>
          <h4 style={headingStyle}>Our Team</h4>
          <h4 style={headingStyle}>Careers</h4>
          <h4 style={headingStyle}>Blog</h4>
          <h4 style={headingStyle}>FAQs</h4>
          <h4 style={headingStyle}>Terms of Service</h4>
          <h4 style={headingStyle}>Privacy Policy</h4>
        </div>
        <div className="contact-info">
          <p style={paragraphStyle}>Phone: +94912232674</p>
          <p style={paragraphStyle}>Email: contact@rideeasy.com</p>
          <p style={paragraphStyle}>Address: Ride Easy Srilanka</p>
          <hr style={{ width: "100%", border: "1px solid white" }} />
          <p style={copyrightStyle}>
            © 2023 Copyright Ride Easy. All Rights Reserved.
          </p>
        </div>
      </MDBContainer>
    </MDBFooter>
  );
}
