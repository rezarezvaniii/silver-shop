import { createSlice } from '@reduxjs/toolkit';

// بررسی مقدار موجود در localStorage
const persistedState = localStorage.getItem('cartState')
  ? JSON.parse(localStorage.getItem('cartState'))
  : [];

const cartSlice = createSlice({
  name: 'cart',
  initialState: persistedState,
  reducers: {
    addToCart: (state, action) => {
      state.push(action.payload);
      // ذخیره مقدار state در localStorage
      localStorage.setItem('cartState', JSON.stringify(state));
    },
    removeFromCart: (state, action) => {
      console.log("this is a state  ",state)
      const updatedState = state.filter(item => item.id !== action.payload);
      // ذخیره مقدار updatedState در localStorage
      localStorage.setItem('cartState', JSON.stringify(updatedState));
      return updatedState;
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;