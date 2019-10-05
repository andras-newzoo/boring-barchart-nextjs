import { createSelector } from 'reselect'

// export const selectFilteredFurniture = createSelector(
//   selectAllFurnitures,
//   selectFilter,
//   (allFurnitures, filter) => allFurnitures.filter(furn => furn.type === filter)
// );

// export const selectLivingRoomAndKitchen = createSelector(
//   [ selectAllLivingRoom, selectAllKitchen ],
//   (livingRoom, kitchen) => [ ...livingRoom, ...kitchen ]
// )

const selectFurnitureList = state => state.furnitureBankReducer.productList
const selectedAllSelected = state => state.furnitureBankReducer.selectedItems

export const selectAllSelected = createSelector(
  selectedAllSelected,
  selectedList => selectedList.map(el => el.name)
)

export const selectAllUnselected = createSelector(
  selectFurnitureList,
  selectAllSelected,
  ( totalList, allSelected ) => totalList.filter(el => !allSelected.includes(el.product_name))
)
