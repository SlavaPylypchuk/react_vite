import { configureStore } from '@reduxjs/toolkit';
import yourSlice from './yourSlice';

const store = configureStore({
  reducer: {
    yourFeature: yourSlice,
  },
});

export default store;