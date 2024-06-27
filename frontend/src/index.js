import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { RidersContextProvider } from "./context/RiderContext";
import { AuthContextProvider } from "./context/AuthContext";
import { ChakraProvider, theme } from "@chakra-ui/react";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <AuthContextProvider>
        <RidersContextProvider>
          <App />
        </RidersContextProvider>
      </AuthContextProvider>
    </ChakraProvider>
  </React.StrictMode>
);
