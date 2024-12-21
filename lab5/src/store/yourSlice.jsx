import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  status: 'idle',
  error: null,
};

const yourSlice = createSlice({
  name: 'yourFeature',
  initialState,
  reducers: {
    addItem(state, action) {
      state.items.push(action.payload);
    },
    removeItem(state, action) {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
    updateItem(state, action) {
      const index = state.items.findIndex(item => item.id === action.payload.id);
      if (index !== -1) {
        state.items[index] = action.payload;
      }
    },
  },
});

export const { addItem, removeItem, updateItem } = yourSlice.actions;
export default yourSlice.reducer;