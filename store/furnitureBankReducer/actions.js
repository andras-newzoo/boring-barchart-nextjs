import {
  DECREMENT,
  INCREMENT,
  UPDATE_FILTER,
  ADD_ITEM,
  INCREMENT_ITEM,
  DECREMENT_ITEM,
  DELETE_ITEM
} from "./types";

export const increment = () => ({
  type: INCREMENT
});

export const decrement = () => ({
  type: DECREMENT
});

export const updateFilter = filter => ({
  type: UPDATE_FILTER,
  payload: {
    filter
  }
});

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
