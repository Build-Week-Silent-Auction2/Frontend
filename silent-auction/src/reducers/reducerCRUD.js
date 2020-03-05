import {
  NEWITEM_DATA,
  NEWITEM_SUCCESS,
  NEWITEM_ERROR,
  UPDATE_DATA,
  UPDATE_SUCCESS,
  UPDATE_ERROR,
  DELETE_DATA,
  DELETE_SUCCESS,
  DELETE_ERROR
} from "../actions/index";

export const initialState = {
  error: "",
  isPosting: false,
  isUpdating: false,
  isDeleting: false
};

export const crudReducer = (state = initialState, action) => {
  switch (action.types) {
    case NEWITEM_DATA:
      return { ...state, isPosting: true };
    case NEWITEM_SUCCESS:
      return { ...state, isPosting: false };
    case NEWITEM_ERROR:
      return { ...state, isPosting: false };
    case UPDATE_DATA:
      return { ...state, isUpdating: true };
    case UPDATE_SUCCESS:
      return { ...state, isUpdating: false };
    case UPDATE_ERROR:
      return { ...state, isUpdating: false };
    case DELETE_DATA:
      return { ...state, isDeleting: true };
    case DELETE_SUCCESS:
      return { ...state, isDeleting: false };
    case DELETE_ERROR:
      return { ...state, isDeleting: false };
    default:
      return state;
  }
};
