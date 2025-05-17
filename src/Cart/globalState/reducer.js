// import { cartItems } from "../data";
import {
  CLEAR_CART,
  DECREASE,
  INCREASE,
  REMOVE_ITEM,
  LOADING,
  DISPLAY_ITEMS,
} from "./actions";

export const defaultState = {
  loading: false,
  cart: new Map(),
};

export const reducer = (state, { type, payload }) => {
  if (type === INCREASE) {
    const newCart = new Map(state.cart);
    const item = newCart.get(payload.id);
    const newItem = { ...item, amount: item.amount + 1 };
    newCart.set(payload.id, newItem);

    return { ...state, cart: newCart };
  }

  if (type === DECREASE) {
    const itemAmount = state.cart.get(payload.id);

    if (itemAmount.amount === 1) {
      return state;
    }

    const newCart = new Map(state.cart);
    const item = newCart.get(payload.id);
    const newItem = { ...item, amount: item.amount - 1 };
    newCart.set(payload.id, newItem);

    return { ...state, cart: newCart };
  }

  if (type === REMOVE_ITEM) {
    const newCart = new Map(state.cart);
    newCart.delete(payload.id);
    return { ...state, cart: newCart };
  }

  if (type === CLEAR_CART) {
    return { ...state, cart: new Map() };
  }

  if (type === LOADING) {
    return { ...state, loading: payload };
  }

  if (type === DISPLAY_ITEMS) {
    return {
      ...state,
      cart: new Map(payload.data.map((item) => [item.id, item])),
    };
  }

  return state;
};
