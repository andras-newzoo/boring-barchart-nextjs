import { createSelector } from 'reselect'

const selectFurnitureList = state => state.furnitureBankReducer.productList
const selectedAllSelected = state => state.furnitureBankReducer.selectedItems
const selectAllDonation = state => state.furnitureBankReducer.donationsData
const selectAllFamily = state => state.furnitureBankReducer.familyData

//* Array of all selected items
export const selectAllSelected = createSelector(
  selectedAllSelected,
  selectedList => selectedList.map(el => el.name)
)

export const selectTotalQuantity = createSelector(
  selectedAllSelected,
  selectedList => selectedList.reduce(((acc, curr) => acc + curr.quantity), 0)
)

export const selectAllUnselected = createSelector(
  selectFurnitureList,
  selectAllSelected,
  ( totalList, allSelected ) => totalList.filter(el => !allSelected.includes(el.product_name))
)

//* Get relevant postal code list
export const selectFilteredDonationPostalCode = createSelector(
  selectAllDonation,
  selectAllSelected,
  (donations, selectedItems) => 
    [...new Set(donations.filter(el => selectedItems.includes(el.product_name)).map(el => el.postal_code))]
)

//* Get family data for postal codes
export const selectFilteredFamilies = createSelector(
  selectAllFamily,
  selectFilteredDonationPostalCode,
  (families, selectedPostalCodes) => families.filter(el => selectedPostalCodes.includes(el.postal_code))
)



