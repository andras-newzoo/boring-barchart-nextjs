import { DECREMENT, INCREMENT, UPDATE_FILTER } from "./types";
import coordinatesData from "../../static/data/chartDataSets/FurnitureBank2019/coordinatesMaster.json";
import donationsData from "../../static/data/chartDataSets/FurnitureBank2019/donationsData.json";
import familyData from "../../static/data/chartDataSets/FurnitureBank2019/familyData.json";
import { createReducer } from "../utils/reducerUtils";

const initialState = {
  count: 0,
  filter: 'living room',
  furnitures: [{
    type: "living room",
    name: "table"
  },
  {
    type: "living room",
    name: "chair"
  },
  {
    type: "living room",
    name: "television"
  },
  {
    type: "kitchen",
    name: "fridge"
  },
  {
    type: "kitchen",
    name: "oven"
  }
    ],
  coordinatesData,
  donationsData,
  familyData
};

const incrementCounter = state => ({ ...state, count: state.count + 1 });
const decrementCounter = state => ({ ...state, count: state.count - 1 });
const updateFilter = ( state, payload ) => ({ ...state, filter: payload.filter })

export default createReducer(initialState, {
  [INCREMENT]: incrementCounter,
  [DECREMENT]: decrementCounter,
  [UPDATE_FILTER]: updateFilter
});
