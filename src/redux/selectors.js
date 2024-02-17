import { createSelector } from '@reduxjs/toolkit';

export const selectLoading = state => state.cars.loading;

export const selectError = state => state.cars.error;

export const selectFavorites = state => state.cars.selectedCars;

export const selectCatalog = state => state.cars.catalog;

export const selectFilter = state => state.filter.filterCars;

export const selectVisibleCars = createSelector(
  [selectCatalog, selectFilter],
  (catalog, filter) => {
    if (filter.brand !== null) {
      catalog = catalog.filter(item => item.make.includes(filter.brand));
    }
    if (filter.price !== null) {
      catalog = catalog.filter(item => item.rentalPrice.includes(filter.price));
    }
    return catalog;
  }
);
