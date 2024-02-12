import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

// axios.defaults.baseURL = 'https://656383fbee04015769a7535a.mockapi.io/cars';
// const carsURL = axios.create({
//   baseURL: 'https://656383fbee04015769a7535a.mockapi.io/cars',
// });

const carsURL = axios.create({
    baseURL: 'https://656383fbee04015769a7535a.mockapi.io/',
  });

export const getCars = createAsyncThunk(
  'cars/fetchAll', // Використовуємо символ підкреслення як ім'я першого параметра,
  // тому що в цій операції він нам не потрібен ми нічого не передаємо
  async (_, thunkAPI) => {
    try {
      const response = await carsURL.get('/cars');
      // При успішному запиті повертаємо проміс із даними
      console.log(response.data);
      return response.data; // ЦЕ БУДЕ ЗАПИСАНО В ЕКШИН ПЕЙЛОАД
    } catch (error) {
      // При помилці запиту повертаємо проміс
      // який буде відхилений з текстом помилки
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
getCars();