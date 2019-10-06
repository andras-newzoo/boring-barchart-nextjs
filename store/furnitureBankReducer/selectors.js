import { createSelector } from "reselect";

const selectFurnitureList = state => state.furnitureBankReducer.productList;
const selectedAllSelected = state => state.furnitureBankReducer.selectedItems;
const selectAllDonation = state => state.furnitureBankReducer.donationsData;
const selectAllFamily = state => state.furnitureBankReducer.familyData;
const selectAllCoordinates = state =>
  state.furnitureBankReducer.coordinatesData;

//* Array of all selected items
export const selectAllSelected = createSelector(
  selectedAllSelected,
  selectedList => selectedList.map(el => el.name)
);

export const selectTotalQuantity = createSelector(
  selectedAllSelected,
  selectedList => selectedList.reduce((acc, curr) => acc + curr.quantity, 0)
);

export const selectAllUnselected = createSelector(
  selectFurnitureList,
  selectAllSelected,
  (totalList, allSelected) =>
    totalList.filter(
      el =>
        !allSelected
          .map(el => el.toLowerCase())
          .includes(el.product_name.toLowerCase())
    )
);

//* Get relevant postal code list
export const selectFilteredDonationPostalCode = createSelector(
  selectAllDonation,
  selectAllSelected,
  (donations, selectedItems) =>
    donations.filter(el => selectedItems.includes(el.product_name))
);

//* Get family data for postal codes
export const selectFilteredFamilies = createSelector(
  selectAllFamily,
  selectFilteredDonationPostalCode,
  (families, selectedPostalCodes) =>
    families.filter(el => selectedPostalCodes.includes(el.postal_code))
);

//* Get cooordinates for singe postal codes
export const selectFilteredCoordinates = createSelector(
  selectAllCoordinates,
  selectFilteredDonationPostalCode,
  (coordinates, selectedPostalCodes) =>
    selectedPostalCodes.map(el => ({
      ...el,
      coors: coordinates.find(d => d.postal_code === el.postal_code)
    }))
);

//* Get coordinates for all postal codes
export const selectFilteredDonationsCoordinates = createSelector();
