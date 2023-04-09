import axios from "axios";
import {
  ALL_PRODUCT_SUCCESS,
  ALL_PRODUCT_REQUEST,
  ALL_PRODUCT_FAILED,
  CLEAR_ERRORS,
} from "../contants/ProductConstant";

export const getProduct = () => async (dispatch) => {
  try {
    dispatch({ type: ALL_PRODUCT_REQUEST });
    await axios.get("/api/v1/products").then((data) => {
      dispatch({
        type: ALL_PRODUCT_SUCCESS,
        payload: data.data,
      });
    });
  } catch (error) {
    dispatch({
      type: ALL_PRODUCT_FAILED,
      payload: error.response.data.message,
    });
  }
};

export const clearError = () => async (dispatch) => {
  dispatch({ type: CLEAR_ERRORS });
};