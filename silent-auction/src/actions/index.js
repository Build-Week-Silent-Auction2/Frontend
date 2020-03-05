import { axiosWithAuth } from "../utilities/axiosWithAuth";

//Sign up axios post call-----------------------------------------
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
      dispatch({ type: SIGNUP_SUCCESS, payload: response.data.userInfo });
      window.localStorage.setItem("token", response.data.token);
    })
    .catch((error) => {
      console.log("signup error: ", error.response);
      dispatch({ type: SIGNUP_ERROR, payload: error.response });
    });
};

//Login axios post call-----------------------------------------

export const LOGIN_DATA = "LOGIN_DATA";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_ERROR = "LOGIN_ERROR";

export const Login = (type, obj) => (dispatch) => {
  dispatch({ type: LOGIN_DATA });
  const aLogin = {
    username: obj.username,
    password: obj.password
  };
  return axiosWithAuth()
    .post(`/auth/login/${type}`, aLogin)
    .then((response) => {
      console.log("login response: ", response.data);
      dispatch({ type: LOGIN_SUCCESS, payload: response.data.userInfo });
      window.localStorage.setItem("token", response.data.token);
    })
    .catch((error) => {
      console.log("login error: ", error.response);
      dispatch({ type: LOGIN_ERROR, payload: error.response });
    });
};

//Create item axios post call-----------------------------------------

export const NEWITEM_DATA = "NEWITEM_DATA";
export const NEWITEM_SUCCESS = "NEWITEM_SUCCESS";
export const NEWITEM_ERROR = "NEWITEM_ERROR";

export const NewItem = (sellerid, obj) => (dispatch) => {
  dispatch({ type: NEWITEM_DATA });
  console.log(`obj in the action post`, obj);
  return axiosWithAuth()
    .post(`/api/${sellerid}/items`, obj)
    .then((response) => {
      console.log("new item response: ", response);
      dispatch({ type: NEWITEM_SUCCESS });
    })
    .catch((error) => {
      console.log("new item error: ", error.response);
      dispatch({ type: NEWITEM_ERROR });
    });
};

//Update item axios update call-----------------------------------------

export const UPDATE_DATA = "UPDATE_DATA";
export const UPDATE_SUCCESS = "UPDATE_SUCCESS";
export const UPDATE_ERROR = "UPDATE_ERROR";

export const UpdateItem = (itemid, obj) => (dispatch) => {
  dispatch({ type: UPDATE_DATA });
  console.log(`post obj`, obj);
  return axiosWithAuth()
    .put(`/api/items/${itemid}`, obj)
    .then((response) => {
      console.log("update item response: ", response);
      dispatch({ type: UPDATE_SUCCESS });
    })
    .catch((error) => {
      console.log("update error: ", error.response);
      dispatch({ type: UPDATE_ERROR });
    });
};

//Delete item axios update call-----------------------------------------

export const DELETE_DATA = "DELETE_DATA";
export const DELETE_SUCCESS = "DELETE_SUCCESS";
export const DELETE_ERROR = "DELETE_ERROR";

export const DeleteItem = (itemid) => (dispatch) => {
  dispatch({ type: UPDATE_DATA });
  return axiosWithAuth()
    .delete(`/api/items/${itemid}`)
    .then((response) => {
      console.log("delete item response: ", response);
      dispatch({ type: DELETE_SUCCESS });
    })
    .catch((error) => {
      console.log("delete error: ", error.response);
      dispatch({ type: DELETE_ERROR });
    });
};
