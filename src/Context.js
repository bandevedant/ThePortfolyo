// import { createContext, useCallback, useReducer } from "react";

// // Create Context
// const AlexioContext = createContext();

// // Type
// const type = {
//   NAV: "NAV",
//   TOGGLE: "TOGGLE",
// };
// const { NAV, TOGGLE } = type;

// // Initial Value
// const initialState = {
//   nav: "home",
//   toggle: false,
// };

// // Reducer
// const reducer = (state, action) => {
//   const { type, payload } = action;
//   switch (type) {
//     case NAV:
//       return {
//         ...state,
//         nav: payload,
//       };
//     case TOGGLE:
//       return {
//         ...state,
//         toggle: payload,
//       };
//     default:
//       return state;
//   }
// };

// // Watson State
// const AlexioState = ({ children }) => {
//   const [state, dispatch] = useReducer(reducer, initialState);

//   const changeNav = useCallback((value, toggleValue) => {
//     dispatch({
//       type: NAV,
//       payload: value,
//     });
//     dispatch({
//       type: TOGGLE,
//       payload: toggleValue,
//     });
//   }, []);

//   const { nav, toggle } = state;
//   return (
//     <AlexioContext.Provider
//       value={{
//         nav,
//         changeNav,
//         toggle,
//       }}
//     >
//       {children}
//     </AlexioContext.Provider>
//   );
// };

// export default AlexioState;
// export { AlexioContext };
import { createContext, useCallback, useReducer, useEffect } from "react";

// Create Context
const AlexioContext = createContext();
const UserDataContext = createContext();

// Type
const type = {
  NAV: "NAV",
  TOGGLE: "TOGGLE",
  SET_USER_DATA: "SET_USER_DATA",
};
const { NAV, TOGGLE, SET_USER_DATA } = type;

// Initial Value
const initialState = {
  nav: "home",
  toggle: false,
  userData: null,
};

// Reducer
const reducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case NAV:
      return {
        ...state,
        nav: payload,
      };
    case TOGGLE:
      return {
        ...state,
        toggle: payload,
      };
    case SET_USER_DATA:
      return {
        ...state,
        userData: payload,
      };
    default:
      return state;
  }
};

// Watson State
const AlexioState = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const changeNav = useCallback((value, toggleValue) => {
    dispatch({
      type: NAV,
      payload: value,
    });
    dispatch({
      type: TOGGLE,
      payload: toggleValue,
    });
  }, []);

  useEffect(() => {
    // Fetch user data from API
    const fetchUserData = async () => {
      try {
        const response = await fetch("https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae"); // Replace with your API endpoint
        const userData = await response.json();
        dispatch({ type: SET_USER_DATA, payload: userData });
      } catch (error) {
        console.error("Error fetching user data:", error);
        // Handle errors appropriately, e.g., display an error message
      }
    };

    fetchUserData();
  }, []);

  const { nav, toggle, userData } = state;
  return (
    <UserDataContext.Provider
      value={{ userData }}
    >
      <AlexioContext.Provider
        value={{
          nav,
          changeNav,
          toggle,
        }}
      >
        {children}
      </AlexioContext.Provider>
    </UserDataContext.Provider>
  );
};

export default AlexioState;
export { AlexioContext, UserDataContext };
