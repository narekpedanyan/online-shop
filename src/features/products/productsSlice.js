import { createSlice } from '@reduxjs/toolkit'

export const productsSlice = createSlice({
  name: 'products',
  initialState: {
    cars: []
  },
  reducers: {
    addProduct: (state, action) => {
      state.cars.push(action.payload);
    },
  }
});

export const { addProduct } = productsSlice.actions

export default productsSlice.reducer