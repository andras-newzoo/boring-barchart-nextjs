import { DECREMENT, INCREMENT, UPDATE_FILTER } from "./types";

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