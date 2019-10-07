import {
  UPDATE_FILTER,
  ADD_ITEM,
  INCREMENT_ITEM,
  DECREMENT_ITEM,
  DELETE_ITEM
} from "./types";
import coordinatesData from "../../static/data/chartDataSets/FurnitureBank2019/coordinatesMaster.json";
import donationsData from "../../static/data/chartDataSets/FurnitureBank2019/donationsData.json";
import familyData from "../../static/data/chartDataSets/FurnitureBank2019/familyData.json";
import productList from "../../static/data/chartDataSets/FurnitureBank2019/productList.json";
import { createReducer } from "../utils/reducerUtils";

const initialState = {
  selectedItems: [{ name: 'Armchair', quantity: 1 }, { name: 'Air Conditioner', quantity: 1 }],
  groups: [
    "Refugees",
    "Women and/or Children",
    "Formerly Homeless",
    "Indigenous",
    "Immigrants",
    "Mental Illness",
    "Immigrants & Newcomers",
    "Women & Children",
    "At Risk Youth",
    "LGBTQ"
  ],
  coordinatesData,
  donationsData,
  familyData,
  productList
};

const updateFilter = (state, payload) => ({ ...state, filter: payload.filter });
const addItem = (state, payload) => ({
  ...state,
  selectedItems: [...state.selectedItems, { name: payload.item, quantity: 1 }]
});
const incrementItem = (state, payload) => ({
  ...state,
  selectedItems: state.selectedItems.map(el =>
    el.name === payload.item ? { ...el, quantity: el.quantity + 1 } : el
  )
});
const decrementItem = (state, payload) => ({
  ...state,
  selectedItems: state.selectedItems.map(el =>
    el.name === payload.item ? { ...el, quantity: el.quantity - 1 } : el
  )
});
const deleteItem = (state, payload) => ({
  ...state,
  selectedItems: state.selectedItems.filter(el => el.name !== payload.item)
});

export default createReducer(initialState, {
  [UPDATE_FILTER]: updateFilter,
  [ADD_ITEM]: addItem,
  [INCREMENT_ITEM]: incrementItem,
  [DECREMENT_ITEM]: decrementItem,
  [DELETE_ITEM]: deleteItem
});
