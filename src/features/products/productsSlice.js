import { createSlice } from '@reduxjs/toolkit';
import {carInfoModel} from "../../constants/carInfo";

export const productsSlice = createSlice({
  name: 'products',
  initialState: {
    data: [carInfoModel, carInfoModel, carInfoModel]
  },
  reducers: {
    addProduct: (state, action) => {
      state.data.push(action.payload);
    },
  }
});

export const { addProduct } = productsSlice.actions

export default productsSlice.reducer