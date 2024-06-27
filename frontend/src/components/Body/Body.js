import React from "react";
import backgroundImage from "../../assets/1.jpg";
import "./Body.css";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import { useAuthContext } from "../../hooks/useAuthContext";

const useStyles = makeStyles({
  customButton: {
    borderRadius: "40px",
    backgroundColor: "black",
    color: "white",
    "&:hover": {
      backgroundColor: "lightgray",
    },
    marginTop: "0px",
    fontSize: "18px",
    padding: "10px 20px",
    marginRight: "10px",
  },
});

const Body = () => {
  const classes = useStyles();
  const { user } = useAuthContext();

  return (
    <div className="background">
      <img src={backgroundImage} alt="Background" className="bg-image" />
      <div className="overlay">
        <div className="card">
          <div className="top">
            Drive&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Ride
          </div>
          <div className="bottom">
            <p>Get in the driver's seat and get paid</p>
            <div style={{ display: "flex", justifyContent: "center" }}>
              {user && (
                <Button variant="contained" className={classes.customButton}>
                  <Link
                    to="/createride"
                    style={{ color: "inherit", textDecoration: "none" }}
                  >
                    Create Ride
                  </Link>
                </Button>
              )}
              {user && (
                <Button variant="contained" className={classes.customButton}>
                  <Link
                    to="/admin"
                    style={{ color: "inherit", textDecoration: "none" }}
                  >
                    View Rides
                  </Link>
                </Button>
              )}
            </div>
            <img
              src="https://i0.wp.com/electrek.co/wp-content/uploads/sites/3/2019/12/uber-green-2000.jpg?w=1500&quality=82&strip=all&ssl=1" // Replace with the actual path to your image
              alt="Uber Logo"
              className="image-animation"
              style={{
                position: "absolute",
                top: 25,
                right: 20,
                width: "500px",
                height: "300px",
                borderRadius: "30px",
              }}
            />
          </div>
          <div className="bottomlast">
            Drive on the platform with the largest network of active riders.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
