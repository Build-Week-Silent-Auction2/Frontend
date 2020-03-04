import { combineReducers } from "redux";
import { loginReducer } from "./reducerLogin";
import { crudReducer } from "./reducerCRUD";

export default combineReducers([loginReducer, crudReducer]);
