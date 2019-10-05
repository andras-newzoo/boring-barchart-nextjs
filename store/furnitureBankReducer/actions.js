import { DECREMENT, INCREMENT, UPDATE_FILTER, ADD_ITEM } from "./types";

export const increment = () => ({
  type: INCREMENT
})

export const decrement = () => ({
  type: DECREMENT
})

export const updateFilter = filter => ({
  type: UPDATE_FILTER,
  payload: {
    filter
  }
})

export const AddItem = item => ({
  type: ADD_ITEM,
  payload: {
    item
  }
})