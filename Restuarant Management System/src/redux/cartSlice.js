// cartSlice.js

import { createSlice } from '@reduxjs/toolkit';

// Load initial state from localStorage or initialize as an empty array
let initialState = [];
const storedCart = localStorage.getItem('cart');

if (storedCart) {
  try {
    initialState = JSON.parse(storedCart);
  } catch (error) {
    console.error('Error parsing cart data from localStorage:', error);
    // Optionally handle the error, e.g., by clearing localStorage or setting a default value
    localStorage.removeItem('cart'); // Clear invalid data
  }
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action) {
      state.push({
        ...action.payload,
        addedAt: new Date().toISOString(),
      });
      // Save updated state to localStorage
      localStorage.setItem('cart', JSON.stringify(state));
    },
    deleteFromCart(state, action) {
      return state.filter(item => item.id !== action.payload.id);
    },
    incrementQuantity(state, action) {
      const { payload } = action;
      const existingItem = state.find(item => item.id === payload);
      if (existingItem) {
        existingItem.quantity++;
      }
      // Save updated state to localStorage
      localStorage.setItem('cart', JSON.stringify(state));
    },
    decrementQuantity(state, action) {
      const { payload } = action;
      const existingItem = state.find(item => item.id === payload);
      if (existingItem && existingItem.quantity > 1) {
        existingItem.quantity--;
      }
      // Save updated state to localStorage
      localStorage.setItem('cart', JSON.stringify(state));
    },
  },
});

export const { addToCart, deleteFromCart, incrementQuantity, decrementQuantity } = cartSlice.actions;
export default cartSlice.reducer;
