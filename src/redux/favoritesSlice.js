import { createSlice } from '@reduxjs/toolkit';
import { addCar, deleteCar, fetchFavorites } from './server';

const initialState = {
    selectedCars: [],
    isLoading: false,
    error: null,
};

const handlePending = state => {
    state.isLoading = true;
  };
  
  const handleRejected = (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
  };

  const favoritesSlice = createSlice({
    name: 'favorites',
    initialState,
    extraReducers: builder => {
      builder
        .addCase(fetchFavorites.pending, handlePending)
        .addCase(fetchFavorites.fulfilled, (state, action) => {
          state.isLoading = false;
          state.error = null;
          state.selectedCars = action.payload;
        })
        .addCase(fetchFavorites.rejected, handleRejected)

        .addCase(addCar.pending, handlePending)
        .addCase(addCar.fulfilled, (state, action) => {
          state.isLoading = false;
          state.error = null;
          state.selectedCars.push(action.payload);
        })
        .addCase(addCar.rejected, handleRejected)

        .addCase(deleteCar.pending, handlePending)
        .addCase(deleteCar.fulfilled, (state, action) => {
          state.isLoading = false;
          state.error = null;
          const index = state.selectedCars.findIndex(
            car => car.id === action.payload.id
          );
          state.selectedCars.splice(index, 1);
        })
        .addCase(deleteCar.rejected, handleRejected)
    },
  });
  
  export const favoritesReducer = favoritesSlice.reducer;