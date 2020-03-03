import { axiosWithAuth } from "../utilities/axiosWithAuth";

export const GET_DATA = "GET_DATA";

export const getItem = () => () => {
  dispatch({ type: GET_DATA });
  return axiosWithAuth()
    .get(`/auth/login/${userType}`)
    .then((response) => {
      console.log("getItem response: ", response);
    })
    .catch((error) => {
      console.log("getItem error: ", error);
    });
};
