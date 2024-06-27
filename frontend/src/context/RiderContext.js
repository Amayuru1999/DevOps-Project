import { createContext, useReducer } from "react";

export const RidersContext = createContext();

export const ridersReducer = (state, action) => {
  switch (action.type) {
    case "SET_RIDERS":
      return {
        riders: action.payload,
      };
    case "CREATE_RIDER":
      return {
        riders: [action.payload, ...state.riders],
      };
    case "DELETE_RIDER":
      return {
        riders: state.riders.filter((w) => w._id !== action.payload._id),
      };
    default:
      return state;
  }
};

export const RidersContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(ridersReducer, {
    riders: null,
  });
  return (
    <RidersContext.Provider value={{ ...state, dispatch }}>
      {children}
    </RidersContext.Provider>
  );
};
