import { createSelector } from 'reselect'

const selectAllFurnitures = state => state.furnitureBankReducer.furnitures
const selectFilter = state => state.furnitureBankReducer.filter

console.log(selectFilter);


export const selectAllLivingRoom = createSelector(
  selectAllFurnitures,
  allFurnitures => allFurnitures.filter(furn => furn.type === "living room")
);

export const selectAllKitchen = createSelector(
  selectAllFurnitures,
  allFurnitures => allFurnitures.filter(furn => furn.type === "kitchen")
);

export const selectFilteredFurniture = createSelector(
  selectAllFurnitures,
  selectFilter,
  (allFurnitures, filter) => allFurnitures.filter(furn => furn.type === filter)
);


export const selectLivingRoomAndKitchen = createSelector(
  [ selectAllLivingRoom, selectAllKitchen ],
  (livingRoom, kitchen) => [ ...livingRoom, ...kitchen ]
)