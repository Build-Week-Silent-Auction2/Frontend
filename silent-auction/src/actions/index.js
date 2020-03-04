import { axiosWithAuth } from "../utilities/axiosWithAuth";

export const SIGNUP_DATA = "SIGNUP_DATA";
export const SIGNUP_SUCCESS = "SIGNUP_SUCCESS";
export const SIGNUP_ERROR = "SIGNUP_ERROR";

export const SignUp = (type, obj) => (dispatch) => {
  dispatch({ type: SIGNUP_DATA });
  const newOBJ = {
    firstName: obj.firstName,
    lastName: obj.lastName,
    email: obj.email,
    streetAddress: obj.streetAddress,
    city: obj.city,
    state: obj.state,
    zipCode: obj.zipCode,
    username: obj.username,
    password: obj.password
  };
  return axiosWithAuth()
    .post(`/auth/register/${type}`, newOBJ)
    .then((response) => {
      console.log("signup response: ", response.data);
      dispatch({ type: SIGNUP_SUCCESS });
      window.localStorage.setItem("token", response.data.token);
    })
    .catch((error) => {
      console.log("signup error: ", error.response);
      dispatch({ type: SIGNUP_ERROR, payload: error.response });
    });
};
