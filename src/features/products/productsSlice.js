import {createSlice} from '@reduxjs/toolkit';
import {carInfoModel} from "../../constants/carInfo";
import mers from '../../assets/media/mers.png';
import dodge from '../../assets/media/car.png';
import elantra from '../../assets/media/elantra.png';
import cls from '../../assets/media/cls.png';
import sclass from '../../assets/media/Sclass.png';
import Honda from '../../assets/media/Honda.png';
import acura from '../../assets/media/acura.png';
import nissan from '../../assets/media/nissan.png';


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
            topCount:120,
            img:sclass,
            isSaleImmediat: true,
            isConditional: false,
            isChangeable: false,
            isPartPayable: false,
            vin: '4598211658',
            isMax: true,
            createDate: "22"
        },{
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
            topCount:120,
            img:mers,
            isSaleImmediat: true,
            isConditional: false,
            isChangeable: false,
            isPartPayable: false,
            vin: '4598211658',
            isMax: true,
            createDate: "22"
        },{
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
            topCount:120,
            img:elantra,
            isSaleImmediat: true,
            isConditional: false,
            isChangeable: false,
            isPartPayable: false,
            vin: '4598211658',
            isMax: true,
            createDate: "22"
        },{
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
            topCount:120,
            img:cls,
            isSaleImmediat: true,
            isConditional: false,
            isChangeable: false,
            isPartPayable: false,
            vin: '4598211658',
            isMax: true,
            createDate: "22"
        },{
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
            topCount:120,
            img:dodge,
            isSaleImmediat: true,
            isConditional: false,
            isChangeable: false,
            isPartPayable: false,
            vin: '4598211658',
            isMax: true,
            createDate: "22"
        },{
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
            topCount:120,
            img:nissan,
            isSaleImmediat: true,
            isConditional: false,
            isChangeable: false,
            isPartPayable: false,
            vin: '4598211658',
            isMax: true,
            createDate: "22"
        },{
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
            topCount:120,
            img:acura,
            isSaleImmediat: true,
            isConditional: false,
            isChangeable: false,
            isPartPayable: false,
            vin: '4598211658',
            isMax: true,
            createDate: "22"
        },{
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
            topCount:120,
            img:Honda,
            isSaleImmediat: true,
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