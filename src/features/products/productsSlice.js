import {createSlice} from '@reduxjs/toolkit';

export const productsSlice = createSlice({
    name: 'products',
    initialState: {
        data: []
    },
    reducers: {
        addProduct: (state, action) => {
            state.data.push(action.payload);
        },
    }
});

export const {addProduct} = productsSlice.actions

export default productsSlice.reducer