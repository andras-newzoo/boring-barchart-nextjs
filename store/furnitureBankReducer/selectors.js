import { createSelector } from "reselect";
import _ from "lodash";

const selectGroupList = state => state.furnitureBankReducer.groups;
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

export const selectAllSelectedPrice = createSelector(
  selectFurnitureList,
  selectedAllSelected,
  (furnitureList, selectedItems) =>
    selectedItems
      .map(
        el =>
          +furnitureList.find(d => d.product_name === el.name).value *
          el.quantity
      )
      .reduce((acc, curr) => acc + curr, 0)
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

//* Get coordinates for filtere items
export const selectFilteredCoordinates = createSelector(
  selectAllCoordinates,
  selectFilteredDonationPostalCode,
  (coordinates, selectedPostalCodes) =>
    selectedPostalCodes.map(el => ({
      ...el,
      coors: coordinates.find(d => d.postal_code === el.postal_code)
    }))
);

//* Get unique list of postal codes
export const selectUniqueCoordinates = createSelector(
  selectFilteredDonationPostalCode,
  filteredPostalCodes => [
    ...new Set(filteredPostalCodes.map(el => el.postal_code))
  ]
);

//* Get families from filtered postal codes
export const selectPostalCodeFamilies = createSelector(
  selectUniqueCoordinates,
  selectAllFamily,
  (postalCodes, families) =>
    families.filter(el => postalCodes.includes(el.postal_code))
);

//* Top Groups
export const selectGroups = createSelector(
  selectPostalCodeFamilies,
  families => _.groupBy(families, "segment")
);
export const selectTopGroups = createSelector(
  selectGroups,
  selectGroupList,
  selectPostalCodeFamilies,
  (groups, groupList, total) =>
    groupList.map(el =>
      groups[el]
        ? { group: el, share: groups[el].length / total.length }
        : { group: el, share: 0 }
    )
);

//* Persons
export const selectAdults = createSelector(
  selectPostalCodeFamilies,
  families => _.mean(families.map(el => parseInt(el.adults) || 0))
);
export const selectChildren = createSelector(
  selectPostalCodeFamilies,
  families => _.mean(families.map(el => parseInt(el.children) || 0))
);
