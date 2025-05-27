import { createSlice } from "@reduxjs/toolkit";

const initialState = {

};

export const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
    setAllProducts:(state, action) => {
        state.products = action.payload
    }
    }
})

export const { setAllProducts } = productSlice.actions;

export default productSlice.reducer