import { createSelector } from 'reselect'

const selectAllFurnitures = state => state.furnitureBankReducer.furnitures
const selectFilter = state => state.furnitureBankReducer.filter

const selectFurnitureList = state => state.furnitureBankReducer.productList
const selectedAllSelected = state => state.furnitureBankReducer.selectedItems


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

export const selectAllSelected = createSelector(
  selectedAllSelected,
  selectedList => selectedList.map(el => el.name)
)

export const selectAllUnselected = createSelector(
  selectFurnitureList,
  selectAllSelected,
  ( totalList, allSelected ) => totalList.filter(el => !allSelected.includes(el.product_name))
)
