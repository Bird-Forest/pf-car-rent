import { createSlice } from '@reduxjs/toolkit';
import { filterCars } from './constans';

const filterInit = {
  filterCars,
};

const filterSlice = createSlice({
  name: 'filter',
  initialState: filterInit,
  reducers: {
    setBrand(state, action) {
      state.filterCars.brand = action.payload;
    },
    setPrice(state, action) {
      state.filterCars.price = action.payload;
    },
  },
});

export const { setBrand, setPrice } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
