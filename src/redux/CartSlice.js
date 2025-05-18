// src/redux/CartSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action) {
      const newItem = action.payload;
      console.log(newItem)
      const existingItem = state.items.find(item => item.id === newItem.id);
      
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({
          ...newItem,
          quantity: 1,
        });
      }
    },
    deleteToCart(state, action){
      const itemId = action.payload;
      state.items = state.items.filter(item => item.id !== itemId);
    },

    clearCart(state, action){
      state.items = [];
    },

    handleIncrement(state, action){
      const itemId = action.payload;
      const existingItem = state.items.find(item => item.id === itemId);
      if (existingItem) {
        existingItem.quantity += 1;
      }
    },

    handleDecrement(state, action){
      const itemId = action.payload;
      const existingItem = state.items.find(item => item.id === itemId);
      
      if (existingItem) {
        if (existingItem.quantity > 1) {
          existingItem.quantity -= 1;
        } else {
          // Remove item if quantity would become 0
          state.items = state.items.filter(item => item.id !== itemId);
        }
      }
    },
  },
});

export const { addToCart, deleteToCart,clearCart, handleIncrement, handleDecrement } = cartSlice.actions;
export default cartSlice.reducer;