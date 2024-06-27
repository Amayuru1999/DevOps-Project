// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Body from "./components/Body/Body";
import FourRides from "./components/FourRides/FourRides";
import Footer from "./components/Footer/Footer";
import Signup from "./components/Signup/Signup";
import AdminData from "./components/Admin/AdminData";
import LuxuryRide from "./components/LuxuryRide/LuxuryRide";
import TukTukRide from "./components/TukTukRide/TukTukRide";
import SUVRide from "./components/SUVRide/SUVRide";
import ERide from "./components/ERide/ERide";
import LoginSignup from "./components/LoginSignup/LoginSignup";
import Login from "./components/LoginSignup/Login";
import Admin from "./components/Admin/Admin";

const App = () => {
  return (
    <Router>
      {/* Render NavBar outside Routes */}
      <div className="App">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route
            path="/signup"
            element={
              <div>
                <NavBar />
                <LoginSignup />
                <Footer />
              </div>
            }
          />
          <Route
            path="/login"
            element={
              <div>
                <NavBar />
                <Login />
                <Footer />
              </div>
            }
          />
          <Route
            path="/luxuryride"
            element={
              <div>
                <NavBar />
                <LuxuryRide />
                <Footer />
              </div>
            }
          />
          <Route
            path="/eride"
            element={
              <div>
                <NavBar />
                <ERide />
                <Footer />
              </div>
            }
          />
          <Route
            path="/suvride"
            element={
              <div>
                <NavBar />
                <SUVRide />
                <Footer />
              </div>
            }
          />
          <Route
            path="/tuktukride"
            element={
              <div>
                <NavBar />
                <TukTukRide />
                <Footer />
              </div>
            }
          />
          <Route
            path="/createride"
            element={
              <div>
                <NavBar />
                <Signup />
                <Footer />
              </div>
            }
          />
          <Route
            path="/admin"
            element={
              <div>
                <AdminData />
                <Footer />
              </div>
            }
          />
        </Routes>
      </div>
    </Router>
  );
};

const MainPage = () => {
  return (
    <div>
      <NavBar />
      <Body />
      <FourRides />
      <Footer />
    </div>
  );
};

export default App;
