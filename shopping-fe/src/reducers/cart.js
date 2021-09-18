import { ADD_PRODUCT, REMOVE_PRODUCT, EMPTY_CART } from "../constants";
import { remove } from "lodash";

const INITIAL_STATE = {
  items: [],
};

const cart = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      return {
        items: [...state.items, action.payload.item],
      };
    case REMOVE_PRODUCT:
      remove(state.items, function (item) {
        return item["id"] === action.payload.item["id"];
      });
      return {
        items: [...state.items],
      };
    case EMPTY_CART:
      return {
        items: [],
      };
    default:
      return state;
  }
};

export default cart;
