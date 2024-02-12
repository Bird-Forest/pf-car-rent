import { configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { favoritesReducer } from './favoritesSlice';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';


const carsPersistConfig = {
  key: 'favorites',
  storage,
  whitelist: ['selectedCars'],
};

export const store = configureStore({
  reducer: {
    favorites: persistReducer(carsPersistConfig, favoritesReducer)
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  devTools: process.env.NODE_ENV === 'development',
});

export const persistor = persistStore(store);