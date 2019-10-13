import {
  ADD_ITEM,
  INCREMENT_ITEM,
  DECREMENT_ITEM,
  DELETE_ITEM,
  TOGGLE_MODAL
} from "./types";

export const addItem = item => ({
  type: ADD_ITEM,
  payload: {
    item
  }
});

export const incrementItem = item => ({
  type: INCREMENT_ITEM,
  payload: {
    item
  }
});

export const decrementItem = item => ({
  type: DECREMENT_ITEM,
  payload: {
    item
  }
});

export const deleteItem = item => ({
  type: DELETE_ITEM,
  payload: {
    item
  }
});

export const toggleModal = () => ({
  type: TOGGLE_MODAL,
});

