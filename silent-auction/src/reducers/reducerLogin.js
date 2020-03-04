import {
  LOGIN_DATA,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  SIGNUP_DATA,
  SIGNUP_SUCCESS,
  SIGNUP_ERROR
} from "../actions/index";

export const initialState = {
  error: "",
  isLogin: false,
  id: "",
  firstName: "",
  lastName: "",
  email: "",
  streetAddress: "",
  city: "",
  state: "",
  zipCode: "",
  username: ""
};

export const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_DATA:
      return { ...state, isLogin: true };
    case LOGIN_SUCCESS:
      console.log("inside success login", action);
      return {
        ...state,
        isLogin: false,
        id: action.payload.id,
        firstName: action.payload.firstName,
        lastName: action.payload.lastName,
        email: action.payload.email,
        streetAddress: action.payload.streetAddress,
        city: action.payload.city,
        state: action.payload.state,
        zipCode: action.payload.zipCode,
        username: action.payload.username
      };
    case LOGIN_ERROR:
      return {
        ...state,
        error: `${action.payload.status} ${action.payload.statusText}`,
        isLogin: false
      };
    case SIGNUP_DATA:
      return { ...state, isLogin: true };
    case SIGNUP_SUCCESS:
      return {
        ...state,
        isLogin: false,
        id: action.payload.id,
        firstName: action.payload.firstName,
        lastName: action.payload.lastName,
        email: action.payload.email,
        streetAddress: action.payload.streetAddress,
        city: action.payload.city,
        state: action.payload.state,
        zipCode: action.payload.zipCode,
        username: action.payload.username
      };
    case SIGNUP_ERROR:
      return {
        ...state,
        error: `${action.payload.status} ${action.payload.statusText}`,
        isLogin: false
      };
    default:
      return state;
  }
};
