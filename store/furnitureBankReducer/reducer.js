import { DECREMENT, INCREMENT, UPDATE_FILTER, ADD_ITEM } from "./types";
import coordinatesData from "../../static/data/chartDataSets/FurnitureBank2019/coordinatesMaster.json";
import donationsData from "../../static/data/chartDataSets/FurnitureBank2019/donationsData.json";
import familyData from "../../static/data/chartDataSets/FurnitureBank2019/familyData.json";
import productList from "../../static/data/chartDataSets/FurnitureBank2019/productList.json";
import { createReducer } from "../utils/reducerUtils";

const initialState = {
  selectedItems: [],
  coordinatesData,
  donationsData,
  familyData,
  productList
};

const incrementCounter = state => ({ ...state, count: state.count + 1 });
const decrementCounter = state => ({ ...state, count: state.count - 1 });
const updateFilter = (state, payload) => ({ ...state, filter: payload.filter });
const addItem = (state, payload) => ({
  ...state,
  selectedItems: [...state.selectedItems, { name: payload.item, quantity: 1 }]
})

export default createReducer(initialState, {
  [INCREMENT]: incrementCounter,
  [DECREMENT]: decrementCounter,
  [UPDATE_FILTER]: updateFilter,
  [ADD_ITEM]: addItem
});
