import React from 'react';
import {useDispatch} from "react-redux";
import {addProduct} from "../../features/products/productsSlice";

const Publish = ({productInfo}) => {
  const dispatch = useDispatch();
  const publishProduct = () => {
    dispatch(addProduct(productInfo))
  }
  return (
    <div>
      <div className="container">
        <button type="button" onClick={publishProduct}>
          Add product
        </button>
      </div>
    </div>
  )
}

export default Publish;
