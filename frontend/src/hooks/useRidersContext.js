import { RidersContext } from "../context/RiderContext";
import { useContext } from "react";

export const useRidersContext = () => {
  const context = useContext(RidersContext);

  if (!context) {
    throw Error(
      "useRidersContext must be used inside an RidersContextProvider"
    );
  }

  return context;
};
