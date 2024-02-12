import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://656383fbee04015769a7535a.mockapi.io';
// const carsURL = axios.create({
//   baseURL: 'https://656383fbee04015769a7535a.mockapi.io/cars',
// });

// const carsURL = axios.create({
//     baseURL: 'https://656383fbee04015769a7535a.mockapi.io/',
//   });


export const fetchCatalog = createAsyncThunk(
  'cars/fetchAll', // Використовуємо символ підкреслення як ім'я першого параметра,
  // тому що в цій операції він нам не потрібен ми нічого не передаємо
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/cars');
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
fetchCatalog();

export const fetchFavorites = createAsyncThunk(
  'tasks/fetchAll',
  async (_, thunkAPI) => {
    try {
      const res = await axios.get('/tasks');
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// POST @ /tasks
export const addCar = createAsyncThunk(
  'tasks/addTask',
  async (text, thunkAPI) => {
    try {
      const response = await axios.post('/tasks', { text });
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

// DELETE @ /tasks/:id
export const deleteCar = createAsyncThunk(
  'tasks/deleteTask',
  async (taskId, thunkAPI) => {
    try {
      const response = await axios.delete(`/tasks/${taskId}`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);