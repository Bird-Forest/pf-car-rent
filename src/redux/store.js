import { configureStore } from '@reduxjs/toolkit';
// import storage from 'redux-persist/lib/storage';
import { catalogReducer } from './carsSlice';
// import {
//   persistStore,
//   persistReducer,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from 'redux-persist';


// const carsPersistConfig = {
//   key: 'cars',
//   storage,
//   whitelist: ['catalog']
// };

export const store = configureStore({
  reducer: {
    cars:  catalogReducer,
  },
  // middleware: getDefaultMiddleware =>
  //   getDefaultMiddleware({
  //     serializableCheck: {
  //       ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
  //     },
  //   }),
  // devTools: process.env.NODE_ENV === 'development',
});

// export const persistor = persistStore(store);