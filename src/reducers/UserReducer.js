import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILED,
  SIGNUP_REQUEST,
  SIGNUP_SUCCESS,
  SIGNUP_FAILED,
  CLEAR_ERRORS,
  LOGOUT_SUCCESS,
  LOGOUT_FAILED,
  PROFILE_REQUEST,
  PROFILE_SUCCESS,
  PROFILE_FAILED,
  EDIT_PROFILE_REQUEST,
  EDIT_PROFILE_SUCCESS,
  EDIT_PROFILE_FAILED,
} from "../contants/UserConstant";

export const userReducer = (state = { user: [] }, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
    case SIGNUP_REQUEST:
    case PROFILE_REQUEST:
    case EDIT_PROFILE_REQUEST:
      return {
        loading: true,
        isAuth: false,
      };
    case LOGIN_SUCCESS:
    case SIGNUP_SUCCESS:
    case PROFILE_SUCCESS:
    case EDIT_PROFILE_SUCCESS:
      return {
        ...state,
        loading: false,
        isAuth: true,
        user: action.payload,
      };
    case LOGIN_FAILED:
    case SIGNUP_FAILED:
    case PROFILE_FAILED:
    case EDIT_PROFILE_FAILED:
      return {
        ...state,
        loading: false,
        isAuth: false,
        user: null,
        error: action.payload,
      };
    case LOGOUT_SUCCESS:
      return {
        loading: false,
        isAuth: false,
        user: null,
      };
    case LOGOUT_FAILED:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};
