import { SIGNUP_DATA, SIGNUP_SUCCESS, SIGNUP_ERROR } from "../actions/index";

export const initialState = {
  sellerId: "",
  error: ""
};

export const loginReducer = (state = initialState, action) => {
  switch (action.types) {
    case SIGNUP_DATA:
      return { ...state };
    case SIGNUP_SUCCESS:
      return { ...state };
    case SIGNUP_ERROR:
      return {
        ...state,
        error: `${action.payload.status} ${action.payload.statusText}`
      };
    default:
      return state;
  }
};
