import {createSlice} from '@reduxjs/toolkit';
import {carInfoModel} from "../../constants/carInfo";

export const productsSlice = createSlice({
    name: 'products',
    initialState: {
        data: [{
            id: '4598',
            mark: 'AUDI',
            model: 'A8',
            year: '2021',
            mileage: '100 km',
            fuel: 'petrol',
            engine: '3.0 TDI S12',
            horsePower: '650',
            color: 'Nardo Gray',
            price: '150.000 $',
            currency: '',
            isimmediate: true,
            isConditional: false,
            isChangeable: false,
            isPartPayable: false,
            vin: '4598211658',
            isMax: true,
            createDate: "22"
        }]
    },
    reducers: {
        addProduct: (state, action) => {
            state.data.push(action.payload);
        },
    }
});

export const {addProduct} = productsSlice.actions

export default productsSlice.reducer