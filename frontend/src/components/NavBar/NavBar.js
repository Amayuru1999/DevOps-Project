import React from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import { useLogout } from "../../hooks/useLogout";
import { useAuthContext } from "../../hooks/useAuthContext";

const useStyles = makeStyles({
  customButton: {
    fontFamily: "Poppins",
    fontSize: "20px",
    backgroundColor: "transparent",
    color: "black",
    "&:hover": {
      backgroundColor: "transparent",
    },
    border: 0,
  },
  customButtonWithBackground: {
    borderRadius: "40px",
    backgroundColor: "black",
    color: "white",
    "&:hover": {
      backgroundColor: "lightgray",
    },
    marginLeft: "10px",
  },
  buttonContainer: {
    zIndex: 100,
    position: "sticky",
    top: "0",
    backgroundColor: "gray",
    padding: "10px 20px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
});

const NavBar = () => {
  const classes = useStyles();
  const { logout } = useLogout();
  const { user } = useAuthContext();
  console.log("NavBar user state:", user);
  const handleClick = () => {
    console.log("Log out button clicked");
    logout();
  };

  return (
    <div className={classes.buttonContainer}>
      <Button variant="contained" className={classes.customButton}>
        <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
          Ride Easy
        </Link>
      </Button>

      <div>
        {!user && (
          <Button
            variant="contained"
            className={classes.customButtonWithBackground}
          >
            <Link
              to="/login"
              style={{ color: "inherit", textDecoration: "none" }}
            >
              Sign In
            </Link>
          </Button>
        )}
        {!user && (
          <Button
            variant="contained"
            className={`${classes.customButtonWithBackground}`}
          >
            <Link
              to="/signup"
              style={{ color: "inherit", textDecoration: "none" }}
            >
              Sign Up
            </Link>
          </Button>
        )}
        {/* {!user && (
          <Button
            variant="contained"
            className={classes.customButtonWithBackground}
          >
            <Link
              to="/admin"
              style={{ color: "inherit", textDecoration: "none" }}
            >
              Admin
            </Link>
          </Button>
        )} */}
        {user && (
          <div>
            <span>{user.email}</span>
            <Button
              variant="contained"
              className={classes.customButtonWithBackground}
              onClick={handleClick}
              style={{ marginRight: "2px" }}
            >
              Log Out
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavBar;
