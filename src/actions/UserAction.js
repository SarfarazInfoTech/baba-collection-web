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
import axios from "axios";

export const login = (email, password) => async (dispatch) => {
  try {
    dispatch({ type: LOGIN_REQUEST });
    const config = { headers: { "Content-Type": "application/json" } };
    const { data } = await axios.post(
      `/api/v1/login`,
      { email, password },
      config
    );

    dispatch({ type: LOGIN_SUCCESS, payload: data.user });
  } catch (error) {
    dispatch({
      type: LOGIN_FAILED,
      payload: error.response.data.message,
    });
  }
};

export const logout = () => async (dispatch) => {
  try {
    const config = { headers: { "Content-Type": "application/json" } };
    await axios.post(`/api/v1/logout`, config);

    dispatch({ type: LOGOUT_SUCCESS, payload: "Logout success" });
  } catch (error) {
    dispatch({
      type: LOGOUT_FAILED,
      payload: error.response.data.message,
    });
  }
};

export const signup = (name, email, mobile, password) => async (dispatch) => {
  try {
    dispatch({ type: SIGNUP_REQUEST });
    const config = { headers: { "Content-Type": "application/json" } };
    const { data } = await axios.post(
      `/api/v1/register`,
      { name, email, mobile, password },
      config
    );

    dispatch({ type: SIGNUP_SUCCESS, payload: data.user });
  } catch (error) {
    dispatch({
      type: SIGNUP_FAILED,
      payload: error.response.data.message,
    });
  }
};

export const getProfile = () => async (dispatch) => {
  try {
    dispatch({ type: PROFILE_REQUEST });
    const config = { headers: { "Content-Type": "application/json" } };
    const { data } = await axios.get(`/api/v1/profile`, config);

    dispatch({ type: PROFILE_SUCCESS, payload: data.user });
  } catch (error) {
    dispatch({
      type: PROFILE_FAILED,
      payload: error.response.data.message,
    });
  }
};

export const editProfile = (name, email, mobile) => async (dispatch) => {
  try {
    dispatch({ type: EDIT_PROFILE_REQUEST });
    const config = { headers: { "Content-Type": "application/json" } };
    const { data } = await axios.put(
      `/api/v1/profile/update`,
      { name, email, mobile },
      config
    );

    dispatch({ type: EDIT_PROFILE_SUCCESS, payload: data.user });
  } catch (error) {
    dispatch({
      type: EDIT_PROFILE_FAILED,
      payload: error.response.data.message,
    });
  }
};

export const clearError = () => async (dispatch) => {
  dispatch({ type: CLEAR_ERRORS });
};
