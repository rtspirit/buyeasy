import { createAction } from "redux-actions";
import { ADD_PRODUCT, REMOVE_PRODUCT, EMPTY_CART } from "../constants";

const addItemsSuccess = createAction(ADD_PRODUCT);
const removeItemsSuccess = createAction(REMOVE_PRODUCT);
const emptyCartSuccess = createAction(EMPTY_CART);

export const addItemsToCart = (item) => (dispatch) => {
  dispatch(addItemsSuccess({ item }));
};

export const removeItemsFromCart = (item) => (dispatch) => {
  dispatch(removeItemsSuccess({ item }));
};

export const emptyCart = () => (dispatch) => {
  dispatch(emptyCartSuccess());
};
