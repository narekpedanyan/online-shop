import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {addProduct} from "../../features/products/productsSlice";
import { useHistory } from "react-router-dom";


const Publish = ({handleFieldChange, productInfo}) => {
  const data = useSelector(({products: {data}}) => data);
  const history = useHistory();
  const [state, setState] = useState('');
  const dispatch = useDispatch();
  const publishProduct = () => {
    productInfo.productId = 'index' + data.length;
    dispatch(addProduct(productInfo));
    setState('success');
    handleFieldChange(null);
    setTimeout(
      () => {
        history.push('/');
      },
      2000
    )
  }
  return (
    <div>
      <div className="container">
        {
          state === 'success' ? (
            <div>
              You have successfully added your car.
            </div>
          ) : (
            <button type="button" onClick={publishProduct}>
              Add product
            </button>
          )
        }
      </div>
    </div>
  )
}

export default Publish;
