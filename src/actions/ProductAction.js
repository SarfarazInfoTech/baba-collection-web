import axios from "axios";
import {
  ALL_PRODUCT_SUCCESS,
  ALL_PRODUCT_REQUEST,
  ALL_PRODUCT_FAILED,
  PRODUCT_DETAILS_REQUEST,
  PRODUCT_DETAILS_SUCCESS,
  PRODUCT_DETAILS_FAILED,
  CLEAR_ERRORS,
} from "../contants/ProductConstant";

export const getProduct =
  (keyword = "", CurrentPage = 1, PriceMin = 100, PriceMax = 15000, category) =>
  async (dispatch) => {
    try {
      dispatch({ type: ALL_PRODUCT_REQUEST });

      let link = `/api/v1/products?keyword=${keyword}&page=${CurrentPage}&price[gte]=${PriceMin}&price[lte]=${PriceMax}`;
      if (category) {
        link = `/api/v1/products?keyword=${keyword}&page=${CurrentPage}&price[gte]=${PriceMin}&price[lte]=${PriceMax}&category=${category}`;
      }
      await axios.get(link).then((data) => {
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

export const getProductDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: PRODUCT_DETAILS_REQUEST });
    await axios.get(`/api/v1/product/${id}`).then((data) => {
      dispatch({
        type: PRODUCT_DETAILS_SUCCESS,
        payload: data.data.product,
      });
    });
  } catch (error) {
    dispatch({
      type: PRODUCT_DETAILS_FAILED,
      payload: error.response.data.message,
    });
  }
};

export const clearError = () => async (dispatch) => {
  dispatch({ type: CLEAR_ERRORS });
};
